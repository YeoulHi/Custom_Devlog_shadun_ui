// 자동 생성된 디자인 토큰
// HTML 템플릿에서 추출됨

export const designTokens = {
  "colors": [
    "#eaedf1",
    "#101518",
    "#5c748a",
    "#d4dce2",
    "#dce8f3",
    "rgba(0,0,0,0.1)"
  ],
  "typography": {
    "fontFamilies": [
      "Newsreader, \"Noto Sans\", sans-serif"
    ],
    "fontSizes": [
      "#101518",
      "32px",
      "#5c748a",
      "22px"
    ],
    "fontWeights": [
      "bold",
      "medium",
      "normal"
    ]
  },
  "spacing": [
    "3",
    "2"
  ],
  "components": [
    {
      "name": "Header",
      "type": "navigation",
      "elements": [
        "logo",
        "navigation",
        "search",
        "profile"
      ]
    },
    {
      "name": "Button",
      "type": "interactive",
      "variants": [
        "flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#eaedf1] text-[#101518] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5",
        "flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 flex-row-reverse bg-[#eaedf1] text-[#101518] text-sm font-medium leading-normal w-fit"
      ]
    },
    {
      "name": "PostCard",
      "type": "content",
      "elements": [
        "icon",
        "title",
        "date"
      ]
    },
    {
      "name": "Button",
      "type": "interactive",
      "variants": [
        "flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#eaedf1] text-[#101518] text-sm font-medium leading-normal",
        "flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#eaedf1] text-[#101518] text-sm font-bold leading-normal tracking-[0.015em] w-full max-w-[480px] @[480px]:w-auto"
      ]
    },
    {
      "name": "Button",
      "type": "interactive",
      "variants": [
        "flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#eaedf1] text-[#101518] text-sm font-bold leading-normal tracking-[0.015em]"
      ]
    },
    {
      "name": "PostCard",
      "type": "content",
      "elements": [
        "icon",
        "title",
        "date"
      ]
    },
    {
      "name": "Button",
      "type": "interactive",
      "variants": [
        "flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#dce8f3] text-[#101518] text-sm font-bold leading-normal tracking-[0.015em]"
      ]
    },
    {
      "name": "PostCard",
      "type": "content",
      "elements": [
        "icon",
        "title",
        "date"
      ]
    },
    {
      "name": "Button",
      "type": "interactive",
      "variants": [
        "flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#eaedf1] pl-4 pr-2"
      ]
    },
    {
      "name": "PostCard",
      "type": "content",
      "elements": [
        "icon",
        "title",
        "date"
      ]
    },
    {
      "name": "Button",
      "type": "interactive",
      "variants": [
        "flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-transparent text-[#101518] gap-2 text-base font-bold leading-normal tracking-[0.015em] h-auto min-w-0 px-0",
        "flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#eaedf1] pl-4 pr-2"
      ]
    },
    {
      "name": "PostCard",
      "type": "content",
      "elements": [
        "icon",
        "title",
        "date"
      ]
    }
  ]
};

export type DesignTokens = typeof designTokens;
