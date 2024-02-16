# The Hanged Man

The Hanged Man is a fan collaborative for fans of Bioware's video game series
Dragon Age. Our primary goals include: creating spaces for fans to interact with
other fans in positive and meaningful ways, hosting events which encourage
creation of fanworks to keep fans engaged with Dragon Age fandom, and promoting
Dragon Age events (or multi-fandom events which fit DA themes) which may
interest DA fans.

This repo houses the code for the website for the group.

## Technology

This website is built using [Astro](https://astro.build/), a modern static
website generator, in docs only mode.

Feel free to use it as a template for your own sites. The site is **not** open
for contributions at this time.

### Before You Begin

- Install Node.js.
- Install yarn.
- Clone the repo locally.

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window.
Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be
served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to
build the website and push to the `gh-pages` branch.
