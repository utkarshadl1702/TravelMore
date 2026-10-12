# TravelTea

A cross-platform travel community app built with React Native and TypeScript.

## Getting started

Install dependencies:

```sh
npm install
```

Start Metro in one terminal:

```sh
npm start
```

With an Android emulator running, use a second terminal to launch the app:

```sh
npm run android
```

For iOS, install native dependencies if needed and launch the simulator:

```sh
cd ios && bundle exec pod install && cd ..
npm run ios
```

Run tests with:

```sh
npm test -- --runInBand
```

## Project guide

See [docs/codebase.md](docs/codebase.md) for the app startup flow, folder structure, navigation, current screen behavior, and guidance for adding features.
