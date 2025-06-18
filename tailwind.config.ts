import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // 전체 배경 색상 (body, section 배경 등)
        default: 'hsl(var(--background))',

        // 주요 텍스트 색상 (헤더, 본문 등 일반 텍스트)
        foreground: 'hsl(var(--foreground))',

        // 브랜드 강조 색상 (버튼, 링크 등 인터랙티브 요소)
        primary: 'hsl(var(--primary))',

        // primary 배경 위의 텍스트 색상 (ex. 흰색)
        'primary-foreground': 'hsl(var(--primary-foreground))',

        // 보조 섹션 배경 또는 보조 요소 배경 (예: 카드 내부, 네비 배경)
        secondary: 'hsl(var(--secondary))',

        // 비활성화된 요소 배경 (ex. 입력창 비활성, 태그 배경 등)
        muted: 'hsl(var(--muted))',

        // muted 배경 위의 보조 텍스트 색상 (ex. 회색 텍스트)
        'muted-foreground': 'hsl(var(--muted-foreground))',

        // 기본 테두리 색상 (입력창, 카드, 구분선 등)
        border: 'hsl(var(--border))',

        // 카드 배경 (컨텐츠 박스, 섹션 등)
        card: 'hsl(var(--card))',

        // 카드 내 텍스트 색상
        'card-foreground': 'hsl(var(--card-foreground))',
      },
      borderRadius: {
        lg: '1rem',
        md: '0.5rem',
        sm: '0.25rem',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')],
};

export default config;
