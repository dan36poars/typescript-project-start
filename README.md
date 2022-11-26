# Start Project

## Steps

- [x] initialize git

```bash
    $ git init
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

<br/>

- [x] install express

```bash
    $ yarn add -D express
```
> if `tsc` is installed with global, else type `$ yarn tsc --init`

<br>

- [x] install express types

```bash
    $ yarn add -D @types/express
```

- [x] install ts-node-dev

```bash
    $ yarn add -D ts-node-dev
```
<br>

- [x] add command line script in package.json

`"dev" : "ts-node-dec --respawn --transpile-only --ignore-watch node_modules --no-notify src/main.ts"`