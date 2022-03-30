# Vitest vue component alias import mocking

## Installation

```sh
npm i
```

## Case

I suspect there is a bug in the Vitest watch runner that occurs when triggering a re-run for a vue component that is importing an aliased script.

Note: I've tried to reproduce this with a vanilla js setup, but then I could not reproduce it.

### Reproduction

- In `./tests/Component.test.js` we import the component `./Component.vue`
- In the test we mock two imports: a normal import and an import that imports an aliassed import

First start the vitest in watch mode

```sh
npm run test:watch
```

As you can see the tests run without an issue.

Now open `./importAlias.js` and uncomment the comment on top of the file.

### Expected

Vitest will throw because it executed the aliassed script, while we expected the import to be moc ked:

```sh
 FAIL  tests/Component.test.js > mock repro > mocks a non-aliased Function
TypeError: window.fetch is not a function
 ❯ Module.aliasedMockFunction .alias/index.js:3:10
      1| function aliasedMockFunction() {
      2|   console.log("aliasedMockFunction has been executed");
      3|   window.fetch("/do/not/fetch/this");
```

### Workaround

Restart Vitest.
