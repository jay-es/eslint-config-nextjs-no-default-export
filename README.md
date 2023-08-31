# eslint-config-nextjs-no-default-export

ESLint configuration for Next.js.  
Enforce default exports in App Router's special files (e.g. page.js), and prohibit it in other files.

## Usage

Install packages.

```shell
npm install -D @jay-es/eslint-config-nextjs-no-default-export eslint-plugin-import
```

And then add to `.eslintrc`.

```jsonc
{
  "extends": [
    // ...
    "@jay-es/nextjs-no-default-export"
  ]
}
```
