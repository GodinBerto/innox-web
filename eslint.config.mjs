import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {
    extends: ['eslint:recommended'],
  },
});

const eslintConfig = [
  {
    ignores: [
      'node_modules/',
      '.next/',
      'public/',
      '__tests__/**',
      '**/*.d.ts',
      'innox-sanity/**',
    ],
  },

  ...compat.extends(
    'next',
    'next/core-web-vitals',
    'next/typescript',
    'prettier'
  ),

  {
    rules: {
      'no-console': 'error',
      // 'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'comma-dangle': ['error', 'always-multiline'],
      '@next/next/no-html-link-for-pages': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },

  {
    files: [
      'postcss.config.mjs',
      '**/*.test.{ts,tsx}',
      'vitest.config.ts',
      'vitest.setup.ts',
    ],
    rules: {
      'no-console': 'off',
    },
  },
];

export default eslintConfig;
