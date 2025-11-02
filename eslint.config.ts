import eslintJs from '@eslint/js';
import vitestEslintPlugin from '@vitest/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHook from 'eslint-plugin-react-hooks';
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import typescriptEslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      eslintJs.configs.recommended,
      typescriptEslint.configs.strictTypeChecked,
      typescriptEslint.configs.stylisticTypeChecked,
      eslintPluginReact.configs.flat.recommended,
      eslintPluginReact.configs.flat['jsx-runtime'],
      eslintPluginReactHook.configs.flat['recommended-latest'],
      eslintPluginJsxA11y.flatConfigs.strict,
      eslintPluginReactRefresh.configs.recommended,
      eslintPluginReactRefresh.configs.vite,
      vitestEslintPlugin.configs.recommended,
      eslintConfigPrettier,
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      sourceType: 'module',
      parser: typescriptEslint.parser,
      parserOptions: {
        project: true,
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      /* linkComponents: [{ name: 'MyLink', linkAttribute: 'to' }], */
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
]);
