// @ts-check

/** @type { import("eslint").Linter.Config [] } */
module.exports = [
  {
    plugins: {
      importPlugin: require("eslint-plugin-import"),
    },
  },
  {
    files: ["{,src/}app/**/*.{js,jsx,ts,tsx}"],
    rules: {
      "import/no-default-export": "error",
      "import/prefer-default-export": "off",
    },
  },
  {
    /**
     * @see https://nextjs.org/docs/app/building-your-application/routing#file-conventions
     */
    files: [
      "{,src/}app/**/layout.{js,jsx,tsx}",
      "{,src/}app/**/page.{js,jsx,tsx}",
      "{,src/}app/**/loading.{js,jsx,tsx}",
      "{,src/}app/**/not-found.{js,jsx,tsx}",
      "{,src/}app/**/error.{js,jsx,tsx}",
      "{,src/}app/**/global-error.{js,jsx,tsx}",
      "{,src/}app/**/template.{js,jsx,tsx}",
      "{,src/}app/**/default.{js,jsx,tsx}",
    ],
    rules: {
      "import/no-default-export": "off",
      "import/prefer-default-export": ["error", { target: "any" }],
    },
  },
];
