module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ["standard", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {indent: "off",
    "linebreak-style": ["error", "unix"],
    "no-useless-escape": "off",
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    semi: ["error", "always"],
    "no-shadow": "off",
    "react-native/no-inline-styles": "off",
    "react/self-closing-comp": "off",
    },
};
