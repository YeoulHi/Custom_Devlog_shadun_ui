const fs = require('fs');
const path = require('path');

/**
 * 프로젝트 문서 관리 자동화 스크립트
 * 문서 구조 검증, 링크 확인, 자동 업데이트 기능 제공
 */

class DocsManager {
  constructor() {
    this.docsRoot = path.join(__dirname, '../docs');
    this.projectRoot = path.join(__dirname, '..');
    
    // 문서 구조 정의
    this.docStructure = {
      '01-planning': {
        name: '기획 및 요구사항',
        files: ['PRD.md', 'todo.md', 'roadmap.md']
      },
      '02-architecture': {
        name: '시스템 설계',
        files: ['system-architecture.md', 'component-structure.md', 'database-design.md']
      },
      '03-development': {
        name: '개발 프로세스',
        files: ['debug-process.md', 'coding-standards.md', 'git-workflow.md']
      },
      '04-design': {
        name: '디자인 시스템',
        files: ['figma-mcp-workflow.md', 'design-tokens.md', 'ui-components.md']
      },
      '05-api': {
        name: 'API 문서',
        files: ['api-reference.md', 'integration-guide.md']
      },
      '06-deployment': {
        name: '배포 및 운영',
        files: ['deployment-guide.md', 'monitoring.md']
      }
    };
  }

  // 문서 구조 검증
  validateDocStructure() {
    console.log('📋 문서 구조 검증 중...');
    
    const issues = [];
    
    // docs 폴더 존재 확인
    if (!fs.existsSync(this.docsRoot)) {
      issues.push('❌ docs 폴더가 존재하지 않습니다.');
      return issues;
    }

    // 각 카테고리 폴더 확인
    Object.keys(this.docStructure).forEach(category => {
      const categoryPath = path.join(this.docsRoot, category);
      
      if (!fs.existsSync(categoryPath)) {
        issues.push(`❌ ${category} 폴더가 누락되었습니다.`);
      } else {
        console.log(`✅ ${category} (${this.docStructure[category].name})`);
        
        // 각 카테고리의 파일들 확인
        this.docStructure[category].files.forEach(file => {
          const filePath = path.join(categoryPath, file);
          if (fs.existsSync(filePath)) {
            console.log(`   ✅ ${file}`);
          } else {
            console.log(`   ⚠️  ${file} (누락)`);
          }
        });
      }
    });

    return issues;
  }

  // 누락된 문서 템플릿 생성
  createMissingDocs() {
    console.log('📝 누락된 문서 템플릿 생성 중...');
    
    Object.keys(this.docStructure).forEach(category => {
      const categoryPath = path.join(this.docsRoot, category);
      
      // 카테고리 폴더 생성
      if (!fs.existsSync(categoryPath)) {
        fs.mkdirSync(categoryPath, { recursive: true });
        console.log(`📁 ${category} 폴더 생성됨`);
      }

      // 누락된 파일 템플릿 생성
      this.docStructure[category].files.forEach(file => {
        const filePath = path.join(categoryPath, file);
        if (!fs.existsSync(filePath)) {
          const template = this.generateDocTemplate(category, file);
          fs.writeFileSync(filePath, template);
          console.log(`📄 ${file} 템플릿 생성됨`);
        }
      });
    });
  }

  // 문서 템플릿 생성
  generateDocTemplate(category, filename) {
    const categoryInfo = this.docStructure[category];
    const title = filename.replace('.md', '').replace(/-/g, ' ');
    
    return `# ${title}

===========
Difficulty: Easy  
Learning Keywords: 문서화, ${categoryInfo.name}  
===========

## 📋 개요

이 문서는 ${categoryInfo.name} 관련 내용을 다룹니다.

## 🎯 목적

- [ ] 목적 1
- [ ] 목적 2
- [ ] 목적 3

## 📖 내용

### 섹션 1

내용을 작성하세요.

### 섹션 2

내용을 작성하세요.

## 🔗 관련 문서

- [관련 문서 1](../01-planning/PRD.md)
- [관련 문서 2](../03-development/debug-process.md)

## 📊 체크리스트

- [ ] 항목 1
- [ ] 항목 2
- [ ] 항목 3

---

**작성일**: ${new Date().toISOString().split('T')[0]}  
**카테고리**: ${categoryInfo.name}  
**파일**: ${filename}
`;
  }

  // 문서 링크 검증
  validateDocLinks() {
    console.log('🔗 문서 링크 검증 중...');
    
    const brokenLinks = [];
    
    // 모든 마크다운 파일 찾기
    const markdownFiles = this.findMarkdownFiles(this.docsRoot);
    
    markdownFiles.forEach(filePath => {
      const content = fs.readFileSync(filePath, 'utf8');
      const links = this.extractMarkdownLinks(content);
      
      links.forEach(link => {
        if (link.startsWith('./') || link.startsWith('../')) {
          // 상대 경로 링크 검증
          const targetPath = path.resolve(path.dirname(filePath), link);
          if (!fs.existsSync(targetPath)) {
            brokenLinks.push({
              file: path.relative(this.docsRoot, filePath),
              link: link,
              target: path.relative(this.docsRoot, targetPath)
            });
          }
        }
      });
    });

    if (brokenLinks.length > 0) {
      console.log('❌ 깨진 링크 발견:');
      brokenLinks.forEach(broken => {
        console.log(`   ${broken.file} -> ${broken.link} (${broken.target})`);
      });
    } else {
      console.log('✅ 모든 링크가 유효합니다.');
    }

    return brokenLinks;
  }

  // 마크다운 파일 찾기
  findMarkdownFiles(dir) {
    const files = [];
    
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.findMarkdownFiles(fullPath));
      } else if (item.endsWith('.md')) {
        files.push(fullPath);
      }
    });
    
    return files;
  }

  // 마크다운 링크 추출
  extractMarkdownLinks(content) {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const links = [];
    let match;
    
    while ((match = linkRegex.exec(content)) !== null) {
      links.push(match[2]);
    }
    
    return links;
  }

  // 문서 통계 생성
  generateDocStats() {
    console.log('📊 문서 통계 생성 중...');
    
    const stats = {
      totalDocs: 0,
      totalWords: 0,
      totalLines: 0,
      categories: {}
    };

    Object.keys(this.docStructure).forEach(category => {
      const categoryPath = path.join(this.docsRoot, category);
      const categoryStats = {
        docs: 0,
        words: 0,
        lines: 0,
        files: []
      };

      if (fs.existsSync(categoryPath)) {
        const files = fs.readdirSync(categoryPath).filter(f => f.endsWith('.md'));
        
        files.forEach(file => {
          const filePath = path.join(categoryPath, file);
          const content = fs.readFileSync(filePath, 'utf8');
          const lines = content.split('\n').length;
          const words = content.split(/\s+/).length;
          
          categoryStats.docs++;
          categoryStats.lines += lines;
          categoryStats.words += words;
          categoryStats.files.push({
            name: file,
            lines: lines,
            words: words
          });
        });
      }

      stats.categories[category] = categoryStats;
      stats.totalDocs += categoryStats.docs;
      stats.totalWords += categoryStats.words;
      stats.totalLines += categoryStats.lines;
    });

    return stats;
  }

  // 문서 인덱스 업데이트
  updateDocIndex() {
    console.log('📚 문서 인덱스 업데이트 중...');
    
    const stats = this.generateDocStats();
    
    let indexContent = `# 📚 프로젝트 문서 인덱스

> 자동 생성됨: ${new Date().toLocaleString('ko-KR')}

## 📊 문서 통계

- **총 문서 수**: ${stats.totalDocs}개
- **총 단어 수**: ${stats.totalWords.toLocaleString()}개
- **총 라인 수**: ${stats.totalLines.toLocaleString()}개

## 📁 카테고리별 문서

`;

    Object.keys(this.docStructure).forEach(category => {
      const categoryInfo = this.docStructure[category];
      const categoryStats = stats.categories[category];
      
      indexContent += `### ${category} - ${categoryInfo.name}\n\n`;
      indexContent += `- 문서 수: ${categoryStats.docs}개\n`;
      indexContent += `- 단어 수: ${categoryStats.words.toLocaleString()}개\n\n`;
      
      if (categoryStats.files.length > 0) {
        categoryStats.files.forEach(file => {
          const fileName = file.name.replace('.md', '');
          indexContent += `- [${fileName}](./${category}/${file.name}) (${file.lines}줄, ${file.words}단어)\n`;
        });
      } else {
        indexContent += `- 문서 없음\n`;
      }
      
      indexContent += '\n';
    });

    indexContent += `## 🔄 문서 관리

### 자동화 도구
\`\`\`bash
# 문서 구조 검증
node scripts/docs-manager.js --validate

# 누락된 문서 생성
node scripts/docs-manager.js --create-missing

# 링크 검증
node scripts/docs-manager.js --check-links

# 통계 업데이트
node scripts/docs-manager.js --update-stats
\`\`\`

### 문서 작성 가이드
1. 적절한 카테고리 폴더 선택
2. 파일명 규칙 준수 (소문자, 하이픈 사용)
3. 템플릿 구조 따르기
4. 관련 문서 링크 추가

---
*이 인덱스는 자동으로 생성됩니다. 수동으로 편집하지 마세요.*
`;

    const indexPath = path.join(this.docsRoot, 'INDEX.md');
    fs.writeFileSync(indexPath, indexContent);
    console.log('✅ 문서 인덱스 업데이트 완료');
  }

  // 전체 문서 관리 실행
  async runFullManagement() {
    console.log('🚀 전체 문서 관리 시작...\n');
    
    // 1. 구조 검증
    const issues = this.validateDocStructure();
    if (issues.length > 0) {
      console.log('\n❌ 구조 문제 발견:');
      issues.forEach(issue => console.log(issue));
    }
    
    // 2. 누락된 문서 생성
    this.createMissingDocs();
    
    // 3. 링크 검증
    console.log('');
    this.validateDocLinks();
    
    // 4. 인덱스 업데이트
    console.log('');
    this.updateDocIndex();
    
    console.log('\n✨ 문서 관리 완료!');
  }
}

// CLI 인터페이스
async function main() {
  const docsManager = new DocsManager();
  const args = process.argv.slice(2);
  
  if (args.includes('--validate')) {
    docsManager.validateDocStructure();
  } else if (args.includes('--create-missing')) {
    docsManager.createMissingDocs();
  } else if (args.includes('--check-links')) {
    docsManager.validateDocLinks();
  } else if (args.includes('--update-stats')) {
    docsManager.updateDocIndex();
  } else {
    // 기본: 전체 관리 실행
    await docsManager.runFullManagement();
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { DocsManager }; 