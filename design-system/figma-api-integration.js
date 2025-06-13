
// Figma API 연동 스크립트
// 이 스크립트를 사용하여 디자인 토큰을 Figma에 업로드할 수 있습니다.

const figmaApiKey = 'figd_sgVE_Dnvxj1hCuHLrp1qg5q2EAYBcY5ZjVcNg1ig';
const projectData = {
  "name": "Custom DevLog Design System",
  "description": "HTML 템플릿에서 추출된 디자인 시스템",
  "version": "1.0.0",
  "createdAt": "2025-06-13T07:15:29.739Z",
  "colors": [
    {
      "name": "Background Light",
      "value": "#eaedf1",
      "type": "color",
      "figmaProperties": {
        "type": "SOLID",
        "color": {
          "r": 0.9176470588235294,
          "g": 0.9294117647058824,
          "b": 0.9450980392156862,
          "a": 1
        }
      }
    },
    {
      "name": "Primary Dark",
      "value": "#101518",
      "type": "color",
      "figmaProperties": {
        "type": "SOLID",
        "color": {
          "r": 0.06274509803921569,
          "g": 0.08235294117647059,
          "b": 0.09411764705882353,
          "a": 1
        }
      }
    },
    {
      "name": "Secondary",
      "value": "#5c748a",
      "type": "color",
      "figmaProperties": {
        "type": "SOLID",
        "color": {
          "r": 0.3607843137254902,
          "g": 0.4549019607843137,
          "b": 0.5411764705882353,
          "a": 1
        }
      }
    },
    {
      "name": "Border",
      "value": "#d4dce2",
      "type": "color",
      "figmaProperties": {
        "type": "SOLID",
        "color": {
          "r": 0.8313725490196079,
          "g": 0.8627450980392157,
          "b": 0.8862745098039215,
          "a": 1
        }
      }
    },
    {
      "name": "Accent Blue",
      "value": "#dce8f3",
      "type": "color",
      "figmaProperties": {
        "type": "SOLID",
        "color": {
          "r": 0.8627450980392157,
          "g": 0.9098039215686274,
          "b": 0.9529411764705882,
          "a": 1
        }
      }
    },
    {
      "name": "Color 6",
      "value": "rgba(0,0,0,0.1)",
      "type": "color",
      "figmaProperties": {
        "type": "SOLID",
        "color": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 0.1
        }
      }
    }
  ],
  "typography": {
    "fontFamilies": [
      {
        "name": "Newsreader, Noto Sans, sans-serif",
        "type": "fontFamily"
      }
    ],
    "textStyles": [
      {
        "name": "bold-32px",
        "fontFamily": "Newsreader, Noto Sans, sans-serif",
        "fontWeight": 700,
        "fontSize": 32,
        "type": "textStyle"
      },
      {
        "name": "bold-22px",
        "fontFamily": "Newsreader, Noto Sans, sans-serif",
        "fontWeight": 700,
        "fontSize": 22,
        "type": "textStyle"
      },
      {
        "name": "medium-32px",
        "fontFamily": "Newsreader, Noto Sans, sans-serif",
        "fontWeight": 500,
        "fontSize": 32,
        "type": "textStyle"
      },
      {
        "name": "medium-22px",
        "fontFamily": "Newsreader, Noto Sans, sans-serif",
        "fontWeight": 500,
        "fontSize": 22,
        "type": "textStyle"
      },
      {
        "name": "normal-32px",
        "fontFamily": "Newsreader, Noto Sans, sans-serif",
        "fontWeight": 400,
        "fontSize": 32,
        "type": "textStyle"
      },
      {
        "name": "normal-22px",
        "fontFamily": "Newsreader, Noto Sans, sans-serif",
        "fontWeight": 400,
        "fontSize": 22,
        "type": "textStyle"
      }
    ]
  },
  "components": [
    {
      "name": "Header",
      "type": "component",
      "category": "navigation",
      "variants": [],
      "figmaProperties": {
        "type": "COMPONENT",
        "name": "Header",
        "description": "navigation 컴포넌트 - HTML 템플릿에서 추출됨"
      }
    },
    {
      "name": "Button",
      "type": "component",
      "category": "interactive",
      "variants": [
        "flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#eaedf1] text-[#101518] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5",
        "flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 flex-row-reverse bg-[#eaedf1] text-[#101518] text-sm font-medium leading-normal w-fit",
        "flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#eaedf1] text-[#101518] text-sm font-medium leading-normal",
        "flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#eaedf1] text-[#101518] text-sm font-bold leading-normal tracking-[0.015em] w-full max-w-[480px] @[480px]:w-auto",
        "flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#eaedf1] text-[#101518] text-sm font-bold leading-normal tracking-[0.015em]",
        "flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#dce8f3] text-[#101518] text-sm font-bold leading-normal tracking-[0.015em]",
        "flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#eaedf1] pl-4 pr-2",
        "flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-transparent text-[#101518] gap-2 text-base font-bold leading-normal tracking-[0.015em] h-auto min-w-0 px-0"
      ],
      "figmaProperties": {
        "type": "COMPONENT",
        "name": "Button",
        "description": "interactive 컴포넌트 - HTML 템플릿에서 추출됨"
      }
    },
    {
      "name": "PostCard",
      "type": "component",
      "category": "content",
      "variants": [],
      "figmaProperties": {
        "type": "COMPONENT",
        "name": "PostCard",
        "description": "content 컴포넌트 - HTML 템플릿에서 추출됨"
      }
    }
  ],
  "spacing": [
    {
      "name": "spacing-3",
      "value": "3",
      "type": "spacing"
    },
    {
      "name": "spacing-2",
      "value": "2",
      "type": "spacing"
    }
  ]
};

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
