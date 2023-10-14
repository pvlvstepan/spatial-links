/** @type {import('prettier').Config & import("@ianvs/prettier-plugin-sort-imports").PluginConfig & import("prettier-plugin-tailwindcss").PluginOptions} */
const config = {
    arrowParens: "always",
    bracketSameLine: false,
    bracketSpacing: true,
    singleQuote: false,
    jsxSingleQuote: false,
    trailingComma: "all",
    quoteProps: "consistent",
    tabWidth: 4,
    endOfLine: "auto",
    useTabs: false,
    semi: true,
    printWidth: 80,
    plugins: [
        "@ianvs/prettier-plugin-sort-imports",
        "prettier-plugin-tailwindcss",
    ],
    importOrder: [],
    tailwindFunctions: ["cva", "cn"],
};

export default config;
