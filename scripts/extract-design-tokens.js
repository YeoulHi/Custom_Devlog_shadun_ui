const fs = require('fs');
const path = require('path');

/**
 * HTML 템플릿에서 디자인 토큰을 추출하는 스크립트
 * Figma MCP와 연동하여 디자인 시스템을 구축하기 위한 기초 데이터 생성
 */

// HTML 파일에서 색상 값 추출
function extractColors(htmlContent) {
  const colorRegex = /#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}|rgb\([^)]+\)|rgba\([^)]+\)/g;
  const colors = new Set();
  
  const matches = htmlContent.match(colorRegex);
  if (matches) {
    matches.forEach(color => colors.add(color));
  }
  
  return Array.from(colors);
}

// HTML 파일에서 폰트 정보 추출
function extractTypography(htmlContent) {
  const fontFamilyRegex = /font-family:\s*([^;]+)/g;
  const fontSizeRegex = /text-\[([^\]]+)\]/g;
  const fontWeightRegex = /font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)/g;
  
  const typography = {
    fontFamilies: new Set(),
    fontSizes: new Set(),
    fontWeights: new Set()
  };
  
  // 폰트 패밀리 추출
  let match;
  while ((match = fontFamilyRegex.exec(htmlContent)) !== null) {
    typography.fontFamilies.add(match[1].trim());
  }
  
  // 폰트 크기 추출 (Tailwind 클래스에서)
  while ((match = fontSizeRegex.exec(htmlContent)) !== null) {
    typography.fontSizes.add(match[1]);
  }
  
  // 폰트 가중치 추출
  while ((match = fontWeightRegex.exec(htmlContent)) !== null) {
    typography.fontWeights.add(match[1]);
  }
  
  return {
    fontFamilies: Array.from(typography.fontFamilies),
    fontSizes: Array.from(typography.fontSizes),
    fontWeights: Array.from(typography.fontWeights)
  };
}

// HTML 파일에서 간격 정보 추출
function extractSpacing(htmlContent) {
  const spacingRegex = /(p|m|gap|space)-(x|y|t|r|b|l)?-(\d+|\[([^\]]+)\])/g;
  const spacing = new Set();
  
  let match;
  while ((match = spacingRegex.exec(htmlContent)) !== null) {
    spacing.add(match[3]);
  }
  
  return Array.from(spacing);
}

// HTML 파일에서 컴포넌트 구조 분석
function extractComponents(htmlContent) {
  const components = [];
  
  // 헤더 컴포넌트 감지
  if (htmlContent.includes('<header') || htmlContent.includes('class=".*header')) {
    components.push({
      name: 'Header',
      type: 'navigation',
      elements: ['logo', 'navigation', 'search', 'profile']
    });
  }
  
  // 버튼 컴포넌트 감지
  const buttonRegex = /<button[^>]*class="([^"]*)"[^>]*>/g;
  const buttons = [];
  let buttonMatch;
  while ((buttonMatch = buttonRegex.exec(htmlContent)) !== null) {
    buttons.push(buttonMatch[1]);
  }
  
  if (buttons.length > 0) {
    components.push({
      name: 'Button',
      type: 'interactive',
      variants: [...new Set(buttons)]
    });
  }
  
  // 카드 컴포넌트 감지
  if (htmlContent.includes('flex items-center gap-4') && htmlContent.includes('bg-gray-50')) {
    components.push({
      name: 'PostCard',
      type: 'content',
      elements: ['icon', 'title', 'date']
    });
  }
  
  return components;
}

// 메인 추출 함수
function extractDesignTokens() {
  const htmlDir = path.join(__dirname, '../Stitch_html');
  const outputDir = path.join(__dirname, '../design-system');
  
  // 출력 디렉토리 생성
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  const designTokens = {
    colors: new Set(),
    typography: {
      fontFamilies: new Set(),
      fontSizes: new Set(),
      fontWeights: new Set()
    },
    spacing: new Set(),
    components: []
  };
  
  // 모든 HTML 파일 처리
  const htmlFiles = fs.readdirSync(htmlDir).filter(file => file.endsWith('.html'));
  
  htmlFiles.forEach(file => {
    const filePath = path.join(htmlDir, file);
    const htmlContent = fs.readFileSync(filePath, 'utf8');
    
    console.log(`Processing ${file}...`);
    
    // 색상 추출
    const colors = extractColors(htmlContent);
    colors.forEach(color => designTokens.colors.add(color));
    
    // 타이포그래피 추출
    const typography = extractTypography(htmlContent);
    typography.fontFamilies.forEach(font => designTokens.typography.fontFamilies.add(font));
    typography.fontSizes.forEach(size => designTokens.typography.fontSizes.add(size));
    typography.fontWeights.forEach(weight => designTokens.typography.fontWeights.add(weight));
    
    // 간격 추출
    const spacing = extractSpacing(htmlContent);
    spacing.forEach(space => designTokens.spacing.add(space));
    
    // 컴포넌트 추출
    const components = extractComponents(htmlContent);
    designTokens.components.push(...components);
  });
  
  // Set을 Array로 변환
  const finalTokens = {
    colors: Array.from(designTokens.colors),
    typography: {
      fontFamilies: Array.from(designTokens.typography.fontFamilies),
      fontSizes: Array.from(designTokens.typography.fontSizes),
      fontWeights: Array.from(designTokens.typography.fontWeights)
    },
    spacing: Array.from(designTokens.spacing),
    components: designTokens.components
  };
  
  // JSON 파일로 저장
  fs.writeFileSync(
    path.join(outputDir, 'design-tokens.json'),
    JSON.stringify(finalTokens, null, 2)
  );
  
  // TypeScript 파일로 저장
  const tsContent = `// 자동 생성된 디자인 토큰
// HTML 템플릿에서 추출됨

export const designTokens = ${JSON.stringify(finalTokens, null, 2)};

export type DesignTokens = typeof designTokens;
`;
  
  fs.writeFileSync(
    path.join(outputDir, 'design-tokens.ts'),
    tsContent
  );
  
  console.log('✅ 디자인 토큰 추출 완료!');
  console.log(`📁 출력 위치: ${outputDir}`);
  console.log(`🎨 색상: ${finalTokens.colors.length}개`);
  console.log(`📝 폰트 패밀리: ${finalTokens.typography.fontFamilies.length}개`);
  console.log(`📏 간격: ${finalTokens.spacing.length}개`);
  console.log(`🧩 컴포넌트: ${finalTokens.components.length}개`);
  
  return finalTokens;
}

// 스크립트 실행
if (require.main === module) {
  extractDesignTokens();
}

module.exports = { extractDesignTokens }; 