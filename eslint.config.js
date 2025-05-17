// eslint.config.js
import eslintPluginPrettier from 'eslint-plugin-prettier';
import tseslint from 'typescript-eslint';

export default await tseslint.config(
  {
    // TypeScript 基本推薦設定
    extends: ['eslint:recommended'],
  },
  {
    // Prettier 整合設定
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      indent: ['error', 2],
    },
  },
  {
    ignores: ['dist', 'node_modules'],
  }
);
