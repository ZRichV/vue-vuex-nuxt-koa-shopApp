module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended'
    ],
    // add your custom rules here
    rules: {
        'nuxt/no-cjs-in-config': 'off',
        'indent': 'off',
        'eol-last': 0,
        'space-before-function-paren': 0,
        'vue/html-closing-bracket-spacing': 0,
        'vue/html-indent': 0,
        'no-trailing-spaces': 0,
        'key-spacing': 0,
        'vue/html-self-closing': 0,
        'vue/singleline-html-element-content-newline': 0,
        'semi': 0,
        'quotes': 0,
        'no-lonely-if': 0
    }
}