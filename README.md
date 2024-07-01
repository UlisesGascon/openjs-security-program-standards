# OpenJS Security Program Standards

This Standard is designed to serve as an achievable minimum security baseline for OpenJS Foundation Project maintainers. More plainly said, this is intended to be used as an easily digested and actioned security checklist.

## Website

This website is built using [Docusaurus 2](https://docusaurus.io/) and [generator-fast-documentation](https://github.com/UlisesGascon/generator-fast-documentation)

### Installation

```
$ npm i
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Manage releases

- Check [standard-version docs](https://github.com/conventional-changelog/standard-version)

### Manage git Hooks

- Check [Husky docs](https://github.com/typicode/husky)