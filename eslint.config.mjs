<<<<<<< HEAD
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript'],
    plugins: ['tailwindcss'],
    rules: {
      'no-undef': 'off', // 정의되지 않은 변수 사용을 비활성화
      'tailwindcss/no-custom-classname': 'off', // 커스텀 클래스명 사용 허용
      'tailwindcss/classnames-order': 'off', // 클래스 순서 검사 비활성화
      'prefer-arrow-callback': 'off', // 화살표 함수 강제 비활성화
      'prefer-template': 'off', // 템플릿 리터럴 강제 비활성화
    },
  }),
];
=======
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);
>>>>>>> c603cb4 (Initial commit from Create Next App)

export default eslintConfig;
