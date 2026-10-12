# TravelTea Codebase Guide

## What the app is

TravelTea is a React Native app written in TypeScript. React Native lets the same JavaScript/TypeScript UI run on iOS and Android. The app currently has four bottom tabs: Explore, Community, Maps, and Profile.

## Start here

The app starts in `index.js`. React Native registers the root component from `App.tsx` using the name in `app.json`.

`App.tsx` is the application shell. It provides safe-area context, configures the status bar, and renders `RootNavigator`. Screen UI and navigation are kept out of this file.

## Source layout

```text
src/
  components/
    AppHeader.tsx       Shared TravelTea text logo and profile action
    PageFrame.tsx       Shared layout for simple tab pages
  navigation/
    RootNavigator.tsx   Tab routes, order, icons, and selected-tab styling
  screens/
    ExploreScreen.tsx   Explore page and sample open-trip interaction
    CommunityScreen.tsx Community page placeholder
    MapsScreen.tsx      Maps page placeholder
    ProfileScreen.tsx   Profile page placeholder
__tests__/
  App.test.tsx          Root render and bottom-tab navigation tests
```

## Navigation flow

`RootNavigator.tsx` uses React Navigation's bottom-tab navigator. It owns the route names and their order. Selecting a tab displays its screen while keeping the tab bar visible. The profile icon in the shared header navigates to the Profile tab.

The screen components receive `onPressProfile` as a prop. This keeps screen layout separate from navigation details and makes the shared header reusable.

## Current behavior

- **Explore** shows the initial sample trip. The join button changes locally to “Request sent”; no request is saved or sent to a server.
- **Community**, **Maps**, and **Profile** are separate routes with their page headings and shared header. Their feature content has not been designed or implemented yet.
- The header displays the text “TravelTea” and a profile icon.

## Run and verify

Run commands from the `TravelTea` project directory. Start Metro in one terminal:

```sh
npm start
```

In another terminal, launch Android:

```sh
npm run android
```

If the first Android build is slow on an emulator, build only its active CPU architecture:

```sh
npx react-native run-android --active-arch-only
```

For iOS, first install CocoaPods dependencies when required, then launch the simulator:

```sh
cd ios && bundle exec pod install && cd ..
npm run ios
```

Run the tests with:

```sh
npm test -- --runInBand
```

## Useful concepts

- A **screen** is a component registered as a navigation route.
- A **component** is a reusable piece of UI, such as `AppHeader`.
- **Props** are inputs passed to a component. For example, screens receive `onPressProfile` from the navigator.
- **State** is data owned by a component that can change while the app runs. Explore owns the temporary `requestSent` value.
- `StyleSheet.create` groups React Native styles. Styles use JavaScript objects rather than CSS files.

## Adding a feature

1. Agree on the feature's purpose and its visible text and appearance.
2. Keep page-specific behavior in that screen's file; move UI shared by multiple screens into `src/components`.
3. Put navigation changes in `src/navigation/RootNavigator.tsx`.
4. Add or update a focused test in `__tests__`.
5. Run the test suite and check the change on both platforms when practical.

Feature copy and visual choices should be agreed before adding them to the app.
