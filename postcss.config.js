const cssnano = process.env.NODE_ENV === "production" ? { cssnano: {} } : {};

/** @type {import('postcss-load-config').Config} */
module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        ...cssnano,
    },
};
