# Start Project

## Steps

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
"baseUrl" : "./", // need it for paths modules
"paths": {
    "@controllers/*" : ["src/controllers/*"],
    "@models/*" : ["src/models/*"],
    "@views/*" : ["src/views/*"],
    "@config/*" : ["src/config/*"],
}
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
