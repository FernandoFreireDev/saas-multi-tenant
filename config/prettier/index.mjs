/** @typedef {import('prettier').Config} PrettierConfig */

/** @type { PrettierConfig } */
const config = {
    plugins: ['prettier-plugin-tailwindcss'],
    printWidth: 80,
    tabWidth: 2,
    useTabs: false,
    semi: false,
    singleQuote: false,
    quoteProps: 'as-needed',
    jsxSingleQuote: false,
    trailingComma: 'es5',
    bracketSpacing: true,
    arrowParens: 'always',
    endOfLine: 'auto',
    bracketSameLine: false
}

export default config