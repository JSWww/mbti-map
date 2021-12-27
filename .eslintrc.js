module.exports = {
	root: true,
	env: {
		es6: true,
		node: true,
		browser: true,
		commonjs: true,
	},
	extends: [
		"plugin:vue/essential",
		"eslint:recommended",
		"plugin:prettier/recommended",
	],
	rules: {
		"no-console": "off",
		"no-debugger": "off",
		indent: "off",
		"linebreak-style": ["error", "unix"],
		semi: ["error", "always"],
	},
	parserOptions: {
		parser: "babel-eslint",
		sourceType: "module",
	},
};
