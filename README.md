# RNTest

## Installing Dependencies

You will need Node.js, Watchman, the React Native command line interface, and Xcode/Android Studio.

### Node, Watchman

We recommend installing Node and Watchman using [Homebrew](http://brew.sh/). Run the following commands in a Terminal after installing Homebrew:

```
brew install node
brew install watchman
```

> [Watchman](https://facebook.github.io/watchman) is a tool by Facebook for watching
changes in the filesystem. It is highly recommended you install it for better performance.

### The React Native CLI

Node.js comes with npm, which lets you install the React Native command line interface.

Run the following command in a Terminal:

```
npm install -g react-native-cli
```

> If you get an error like `Cannot find module 'npmlog'`, try installing npm directly: `curl -0 -L https://npmjs.org/install.sh | sudo sh`.

## Running the App

### iOS

Use the React Native command line interface to run `react-native run-ios` inside the project folder.

```
cd <path-to-project>/RNTest
react-native run-ios
```

You should see your new app running in the iOS Simulator shortly.

`react-native run-ios` is just one way to run your app. You can also run it directly from within Xcode or [Nuclide](https://nuclide.io/).

### Android

Use the React Native command line interface to run `react-native run-android` inside the project folder.

```
cd <path-to-project>/RNTest
react-native run-android
```

If everything is set up correctly, you should see your new app running in your AVD shortly.

`react-native run-android` is just one way to run your app - you can also run it directly from within Android Studio or [Nuclide](https://nuclide.io/).

## Modifying the App

Now that you have successfully run the app, let's modify it.

### iOS

- Open `common.index.js` in your text editor of choice and edit some lines.
- Hit `Command⌘ + R` in your iOS Simulator to reload the app and see your change!

### Android

- Open `common.index.js` in your text editor of choice and edit some lines.
- Press the `R` key twice or select `Reload` from the Developer Menu to see your change!
