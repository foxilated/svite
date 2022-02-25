# svite

svite is a minimal svelte template that uses vite instead of rollup.

## it has

- vite
- sass
- unocss (with reset & icons)
- svelte-spa-router
- svelte-preprocess

## how to use

Install the dependencies:

```git clone https://github.com/foxilated/svite
npm install
```

to start a liveserver:

```bash
npm run dev
```

then navigate to [localhost:3000](http://localhost:3000).

## deploy

to build and create the final optimized version:

```bash
npm run build
```

and then upload the 'dist' folder to your host.
