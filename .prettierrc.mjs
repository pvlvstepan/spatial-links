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
    // TODO: setup importOrder
    importOrder: [
        "<BUILT_IN_MODULES>",
        "",
        "^react$",
        "",
        "<THIRD_PARTY_MODULES>",
        "",
        "<TYPES>",
        "",
        "<TYPES>^[.]",
        "",
        "^(@/.*)$",
        "",
        "^[.]",
        "",
        ".css$",
    ],
    tailwindFunctions: ["cva", "cn"],
};

export default config;
