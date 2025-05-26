// eslint.config.js
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier';

/**
 * Flat Config: 使用 typescript-eslint 的官方 preset + prettier 插件整合
 */
export default [
  // TypeScript ESLint 預設設定
  ...tseslint.config({
    // ⛔ 不要加 extends
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      // 你可以在這邊覆蓋預設設定
      '@typescript-eslint/no-unused-vars': ['warn'],
    },
  }),

  // Prettier 整合（讓 prettier 問題變成 ESLint 錯誤）
  {
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

  // 排除不需要檢查的資料夾
  {
    ignores: ['dist', 'node_modules'],
  },
];
