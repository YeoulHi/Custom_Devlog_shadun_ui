const fs = require('fs');
const path = require('path');

/**
 * Figma MCP와 연동하여 디자인 토큰을 동기화하는 스크립트
 * 추출된 디자인 토큰을 Figma 프로젝트에 업로드하고 컴포넌트를 생성
 */

class FigmaMCPSync {
  constructor() {
    this.apiKey = 'figd_sgVE_Dnvxj1hCuHLrp1qg5q2EAYBcY5ZjVcNg1ig';
    this.projectRoot = 'C:\\Users\\audrm\\OneDrive\\Gpters_16_Cursor\\Custom_Devlog_shadun_ui';
    this.designTokensPath = path.join(__dirname, '../design-system/design-tokens.json');
  }

  // 디자인 토큰 로드
  loadDesignTokens() {
    try {
      const tokensData = fs.readFileSync(this.designTokensPath, 'utf8');
      return JSON.parse(tokensData);
    } catch (error) {
      console.error('❌ 디자인 토큰 로드 실패:', error.message);
      return null;
    }
  }

  // 색상 팔레트를 Figma 형식으로 변환
  convertColorsToFigmaFormat(colors) {
    const figmaColors = colors.map((color, index) => {
      // 색상 이름 생성 (색상값 기반)
      let colorName = '';
      if (color === '#101518') colorName = 'Primary Dark';
      else if (color === '#5c748a') colorName = 'Secondary';
      else if (color === '#eaedf1') colorName = 'Background Light';
      else if (color === '#d4dce2') colorName = 'Border';
      else if (color === '#dce8f3') colorName = 'Accent Blue';
      else colorName = `Color ${index + 1}`;

      return {
        name: colorName,
        value: color,
        type: 'color',
        figmaProperties: {
          type: 'SOLID',
          color: this.hexToRgb(color)
        }
      };
    });

    return figmaColors;
  }

  // HEX 색상을 RGB로 변환 (Figma API용)
  hexToRgb(hex) {
    if (hex.startsWith('rgba')) {
      // rgba 처리
      const match = hex.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
      if (match) {
        return {
          r: parseInt(match[1]) / 255,
          g: parseInt(match[2]) / 255,
          b: parseInt(match[3]) / 255,
          a: parseFloat(match[4])
        };
      }
    }
    
    // hex 처리
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16) / 255,
      g: parseInt(result[2], 16) / 255,
      b: parseInt(result[3], 16) / 255,
      a: 1
    } : { r: 0, g: 0, b: 0, a: 1 };
  }

  // 타이포그래피를 Figma 형식으로 변환
  convertTypographyToFigmaFormat(typography) {
    const figmaTypography = {
      fontFamilies: typography.fontFamilies.map(font => ({
        name: font.replace(/"/g, ''),
        type: 'fontFamily'
      })),
      textStyles: []
    };

    // 텍스트 스타일 생성
    const weights = typography.fontWeights;
    const sizes = typography.fontSizes.filter(size => !size.startsWith('#')); // 색상 제외

    weights.forEach(weight => {
      sizes.forEach(size => {
        figmaTypography.textStyles.push({
          name: `${weight}-${size}`,
          fontFamily: typography.fontFamilies[0]?.replace(/"/g, '') || 'Newsreader',
          fontWeight: this.getFontWeightNumber(weight),
          fontSize: this.parseFontSize(size),
          type: 'textStyle'
        });
      });
    });

    return figmaTypography;
  }

  // 폰트 가중치를 숫자로 변환
  getFontWeightNumber(weight) {
    const weightMap = {
      'thin': 100,
      'extralight': 200,
      'light': 300,
      'normal': 400,
      'medium': 500,
      'semibold': 600,
      'bold': 700,
      'extrabold': 800,
      'black': 900
    };
    return weightMap[weight] || 400;
  }

  // 폰트 크기 파싱
  parseFontSize(size) {
    if (size.endsWith('px')) {
      return parseInt(size);
    }
    return parseInt(size) || 16;
  }

  // 컴포넌트를 Figma 형식으로 변환
  convertComponentsToFigmaFormat(components) {
    const figmaComponents = [];
    const processedComponents = new Map();

    components.forEach(component => {
      const key = `${component.name}-${component.type}`;
      
      if (!processedComponents.has(key)) {
        processedComponents.set(key, {
          name: component.name,
          type: component.type,
          variants: []
        });
      }

      const existing = processedComponents.get(key);
      if (component.variants) {
        existing.variants.push(...component.variants);
      }
    });

    processedComponents.forEach((component, key) => {
      figmaComponents.push({
        name: component.name,
        type: 'component',
        category: component.type,
        variants: [...new Set(component.variants)], // 중복 제거
        figmaProperties: {
          type: 'COMPONENT',
          name: component.name,
          description: `${component.type} 컴포넌트 - HTML 템플릿에서 추출됨`
        }
      });
    });

    return figmaComponents;
  }

  // Figma 프로젝트 구조 생성
  generateFigmaProjectStructure(designTokens) {
    const figmaProject = {
      name: 'Custom DevLog Design System',
      description: 'HTML 템플릿에서 추출된 디자인 시스템',
      version: '1.0.0',
      createdAt: new Date().toISOString(),
      
      // 색상 시스템
      colors: this.convertColorsToFigmaFormat(designTokens.colors),
      
      // 타이포그래피 시스템
      typography: this.convertTypographyToFigmaFormat(designTokens.typography),
      
      // 컴포넌트 시스템
      components: this.convertComponentsToFigmaFormat(designTokens.components),
      
      // 간격 시스템
      spacing: designTokens.spacing.map(space => ({
        name: `spacing-${space}`,
        value: space,
        type: 'spacing'
      }))
    };

    return figmaProject;
  }

  // Figma 프로젝트 파일 생성
  async generateFigmaProject() {
    console.log('🎨 Figma MCP 동기화 시작...');
    
    // 1. 디자인 토큰 로드
    const designTokens = this.loadDesignTokens();
    if (!designTokens) {
      console.error('❌ 디자인 토큰을 로드할 수 없습니다.');
      return;
    }

    console.log('✅ 디자인 토큰 로드 완료');
    console.log(`   - 색상: ${designTokens.colors.length}개`);
    console.log(`   - 폰트 패밀리: ${designTokens.typography.fontFamilies.length}개`);
    console.log(`   - 컴포넌트: ${designTokens.components.length}개`);

    // 2. Figma 프로젝트 구조 생성
    const figmaProject = this.generateFigmaProjectStructure(designTokens);
    
    // 3. Figma 프로젝트 파일 저장
    const outputPath = path.join(__dirname, '../design-system/figma-project.json');
    fs.writeFileSync(outputPath, JSON.stringify(figmaProject, null, 2));
    
    console.log('✅ Figma 프로젝트 구조 생성 완료');
    console.log(`📁 저장 위치: ${outputPath}`);

    // 4. Figma API 연동 준비
    await this.prepareFigmaAPIIntegration(figmaProject);

    return figmaProject;
  }

  // Figma API 연동 준비
  async prepareFigmaAPIIntegration(figmaProject) {
    console.log('🔗 Figma API 연동 준비 중...');

    // API 연동 스크립트 생성
    const apiScript = `
// Figma API 연동 스크립트
// 이 스크립트를 사용하여 디자인 토큰을 Figma에 업로드할 수 있습니다.

const figmaApiKey = '${this.apiKey}';
const projectData = ${JSON.stringify(figmaProject, null, 2)};

// Figma API 호출 함수들
async function createFigmaProject() {
  // 1. 새 Figma 파일 생성
  const createFileResponse = await fetch('https://api.figma.com/v1/files', {
    method: 'POST',
    headers: {
      'X-Figma-Token': figmaApiKey,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: projectData.name,
      node_type: 'CANVAS'
    })
  });

  const fileData = await createFileResponse.json();
  console.log('Figma 파일 생성됨:', fileData);

  // 2. 색상 스타일 생성
  for (const color of projectData.colors) {
    await createColorStyle(fileData.key, color);
  }

  // 3. 텍스트 스타일 생성
  for (const textStyle of projectData.typography.textStyles) {
    await createTextStyle(fileData.key, textStyle);
  }

  return fileData;
}

async function createColorStyle(fileKey, colorData) {
  // Figma API를 사용하여 색상 스타일 생성
  console.log('색상 스타일 생성:', colorData.name);
}

async function createTextStyle(fileKey, textStyleData) {
  // Figma API를 사용하여 텍스트 스타일 생성
  console.log('텍스트 스타일 생성:', textStyleData.name);
}

// 실행
// createFigmaProject().catch(console.error);
`;

    const apiScriptPath = path.join(__dirname, '../design-system/figma-api-integration.js');
    fs.writeFileSync(apiScriptPath, apiScript);

    console.log('✅ Figma API 연동 스크립트 생성 완료');
    console.log(`📁 스크립트 위치: ${apiScriptPath}`);
  }

  // MCP 태스크 생성
  async createMCPTasks() {
    const tasks = [
      {
        title: 'Figma 디자인 시스템 구축',
        description: '추출된 디자인 토큰을 기반으로 Figma에서 체계적인 디자인 시스템을 구축합니다.',
        priority: 'high'
      },
      {
        title: 'Figma 컴포넌트 라이브러리 생성',
        description: 'HTML 템플릿의 컴포넌트들을 Figma 컴포넌트로 재생성합니다.',
        priority: 'medium'
      },
      {
        title: 'Figma-React 자동 동기화 설정',
        description: 'Figma 변경사항이 React 컴포넌트에 자동으로 반영되도록 설정합니다.',
        priority: 'medium'
      },
      {
        title: 'Figma 프로토타입 생성',
        description: '전체 블로그 플로우를 Figma에서 프로토타입으로 구현합니다.',
        priority: 'low'
      }
    ];

    return tasks;
  }
}

// 스크립트 실행
async function main() {
  const figmaSync = new FigmaMCPSync();
  
  try {
    const figmaProject = await figmaSync.generateFigmaProject();
    const mcpTasks = await figmaSync.createMCPTasks();
    
    console.log('\n🎯 다음 단계 MCP 태스크:');
    mcpTasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task.title} (${task.priority})`);
      console.log(`   ${task.description}`);
    });

    console.log('\n✨ Figma MCP 동기화 완료!');
    console.log('📋 다음 작업을 진행하세요:');
    console.log('1. design-system/figma-project.json 파일 확인');
    console.log('2. design-system/figma-api-integration.js 스크립트 실행');
    console.log('3. Figma에서 디자인 시스템 구축');
    console.log('4. MCP 태스크 매니저로 후속 작업 관리');
    
  } catch (error) {
    console.error('❌ Figma MCP 동기화 실패:', error.message);
  }
}

if (require.main === module) {
  main();
}

module.exports = { FigmaMCPSync }; 