# Installation

1. Open `index.js` and paste in the proper access token.

2. Run the following commands.

```
npm install
react-native run-ios
```

# Explanation

There is a bug in Mapbox that causes an error on iOS when a cumulative padding of `64` or greater is applied to the camera. In addition, padding does not have any effect on the way bounds are centered on the screen on iOS.

The error that is thrown is:

```
Mapbox error [event]:General [code]:-1 [message]:Unable to calculate
appropriate zoom level for bounds. Vertical or horizontal padding is
greater than map's height or width.
```

On Android, no error is thrown, and padding works as expected.

See the file `MapView.js` for more details, and a list of padding objects that can be passed into the camera as examples.
