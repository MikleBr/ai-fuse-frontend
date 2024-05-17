const config = {
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  trailingComma: 'es5',
  arrowParens: 'avoid',
  plugins: ['prettier-plugin-tailwindcss'],
  // prettier-plugin-tailwindcss
  tailwindFunctions: ['cn'],
};

module.exports = config;
