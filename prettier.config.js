/** @type {import('prettier').Config} */
export default {
  singleQuote: true,
  trailingComma: 'all',

  // prettier-ignore
  importOrder: [
    '^(\w|@\w)', // node_modules like ['something', '@something/...']
    '^(@\/)', // @/ like ['@/assets/...', '@/components/...']
    '^(\.\./\.\./\.\./\.\./\.\./\.\./\.\./\.\./\.\./\.\./)', // 10
    '^(\.\./\.\./\.\./\.\./\.\./\.\./\.\./\.\./\.\./)', // 9
    '^(\.\./\.\./\.\./\.\./\.\./\.\./\.\./\.\./)', // 8
    '^(\.\./\.\./\.\./\.\./\.\./\.\./\.\./)', // 7
    '^(\.\./\.\./\.\./\.\./\.\./\.\./)', // 6
    '^(\.\./\.\./\.\./\.\./\.\./)', // 5
    '^(\.\./\.\./\.\./\.\./)', // 4
    '^(\.\./\.\./\.\./)', // 3  [../../../]
    '^(\.\./\.\./)', // 2  [../../]
    '^(\.\./)', // 1  [../]
    '^(\./)', // 0  [./]
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,

  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
};
