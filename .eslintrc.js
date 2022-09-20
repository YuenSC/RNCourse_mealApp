module.exports = {
  extends: ["universe/native", "@react-native-community"],
  rules: {
    quotes: "off",
    "react/no-unstable-nested-components": ["warn", { allowAsProps: true }],
    "react/react-in-jsx-scope": "off",
    "comma-dangle": "off",
  },
};
