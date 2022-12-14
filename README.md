# Start Project

## Config Typescript

- [x] initialize git

```bash
    $ git init
```

- [x] create .vscode folder
go to menu vscode and type `workspace settings`
add font family fira code and enable the ligatures.
```json
{
    "editor.fontFamily": "'Fira Code'",
    "editor.fontLigatures": true 
}
```

<br/>

- [x] initialize yarn init

```bash
    $ yarn init
```
<br/>

- [x] install typescript

```bash
    $ yarn add -D typescript
```
<br/>

- [x] create tsconfig

```bash
    $ tsc --init
```
<br/>

- [x] create the src folder.
- [x] create the src/main.ts file
- [x] create src/@types folder
- [x] create src/controllers
- [x] create src/models
- [x] create src/views
- [x] create src/config


<br/>

- [x] install express

```bash
    $ yarn add -D express
```
> if `tsc` is installed with global, else type `$ yarn tsc --init`

<br/>

- [x] install express types

```bash
    $ yarn add -D @types/express
```

- [x] install ts-node-dev

```bash
    $ yarn add -D ts-node-dev
```
<br/>

- [x] add command line script in package.json

```json
"dev" : "ts-node-dec --respawn --transpile-only --ignore-watch node_modules --no-notify src/main.ts",
"build" : "tsc",
"prod" : "node dist/main.js"
```

<br/>

Add more options in tsconfig.ts:

```typescript
{
    "rootDir" : "./src",
    "outDir" : "./dist",
    "lib": ["ES6"],
    "allowJs": true,
    "removeComments": true,
     "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "typeRoots": [
      "./node_modules/@types",
      "./src/@types"
    ],
    "resolveJsonModule": true,
}
```

<br/>

- [x] create path modules (alias)

change: `../models/User.ts` to `@model/User.ts`

Create files:
- ./src/controllers/UsersController.ts
- ./src/controllers/Users.ts

add in tsconfig.json:
```json
...
"baseUrl" : "./", // need it for paths modules
"paths": {
    "@controllers/*" : ["src/controllers/*"],
    "@models/*" : ["src/models/*"],
    "@views/*" : ["src/views/*"],
    "@config/*" : ["src/config/*"],
}
...
```
<br/>

- [x] add tsconfig-paths
to enable the ts-node-dev package can be translate the path modules in dev environment.
```bash
    $ yarn add -D tsconfig-paths
```
add one more option in package.json script dev command
```json
"dev": "ts-node-dev -r tsconfig-paths/register --respawn --transpile-only --ignore-watch node_modules --no-notify src/main.ts",
```

## Config eslint

- [x] add eslint
```bash
    $ yarn add -D eslint
```
or

```bash
    $ yarn create @eslint/config
```

- [x] install the eslint extension in vscode.

<br/>

- [x] install typescript parser

```bash
    $ yarn add -D @typescript-eslint/parser
```
<br/>

- [x] add parser in .eslintrc.json file

```json
{
    ...
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        ...
        "project" : "./tsconfig.json" // path to tsconfig.json
        ...
    },
    ...
}
```
<br/>

## Config prettier

- [x] add the prettier and the config files extends to typescript

```bash
    $ yarn add -D prettier eslint-config-prettier
```
<br/>

- [x] create the `.prettierrc.json` file

```json
{
    "semi": true,
    "singleQuote": false,
    "tabWidth": 2,
    "trailingComma": "es5"
}
```
<br/>

- [x] create the `.prettierignore` file
put the files or folders that you won't format

<br/>

- [x] add the option in `.eslintrc.json` file

```json
{
  "extends": [
    "some-other-config-you-use",
    "prettier" // always in the end
  ]
}
```

<br/>

- [x] enable the option in `tsconfig.json`:
`"strictNullChecks": true`

<br/>

- [x] created the file ./vscode/settings.json

```json
{
    ...
    "editor.formatOnSave": true,
    "[typescript]": {
        "editor.formatOnSave": true,
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
    ...
}
```
<br/>

## Config Jest

- [x] install  jest

```bash
    $ yarn add -D jest
```

<br/>

- [x] create jest config file

```bash
    $ yarn jest --init
```

<br/>

- [x] install ts-jest to work with typescripty

```bash
    $ yarn add -D ts-jest
```

add the option preset in jest.config.ts file:
```json
    preset: "ts-jest",
    testEnvironment: "node",
```

<br/>

- [x] install typescript type check for jest typescripty

```bash
    $ yarn add -D @types/jest
```

<br/>

- [x] create src/tests/firstTest.spec.ts file

```typescript
    import { User } from "@models/User";

    test("Test API", async () => {
        const user = await new User();
        user.name = "foo";
        expect(user.name).toEqual("foo");
    });
```
<br/>

- [x] add the `jest` option in environment `.eslintrc.json` file

```json
    ...
    "env": {
        ...
        "jest": true,
        ...
    },
    ...
```
<br/>

- [x] config jest to resolve path modules

add in `jest.config.ts` file

```typescript
    ...
    moduleNameMapper: {
        "@controllers/(.*)" : "<rootDir>/src/controllers/$1",
        "@models/(.*)" : "<rootDir>/src/models/$1",
        "@views/(.*)" : "<rootDir>/src/views/$1",
        "@config/(.*)" : "<rootDir>/src/config/$1"
    }
    ...   
```
<br/>

## Config Babel

- [x] install resources to transpile to js and paths modules resolved

```bash
    $ yarn add -D @babel/core @babel/cli @babel/preset-env @babel/node @babel/preset-typescript babel-plugin-module-resolver
```
<br/>

- [x] create `babel.config.json` file

```json
{
    {
    "presets": [
        [
        "@babel/preset-env",
        {
            "targets": { "node": "current" }
        }
        ],
        "@babel/preset-typescript"
    ],
    "plugins": [
        [
        "module-resolver",
        {
            "alias": {
            "@controllers": "./src/controllers",
            "@models": "./src/models",
            "@views": "./src/views",
            "@config": "./src/config"
            }
        }
        ]
    ],
    "ignore": ["**/*.spec.ts", "**/*.test.ts"]
    }
}

```

- [x] add script command in package.json to build with babel

```json
    ...
    "build" : "babel src --extensions \".js,.ts\" --out-dir dist --copy-files --no-copy-ignored"
    ...
```

>***Tip***
>in `tsconfig.ts` file exclude the `node_modules` folder and include `./src/**/*` folder using the **exclude** and ***include*** options.
