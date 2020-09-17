import React from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';

const latitude = 40.723279;
const longitude = -73.970895;

const boundsEdge = 0.002;

/*
The error is:

Mapbox error [event]:General [code]:-1 [message]:Unable to calculate
appropriate zoom level for bounds. Vertical or horizontal padding is
greater than map's height or width.

Tested on:

- iOS Simulator, iPhone 11
- iOS Simulator, iPhone SE
- Android Emulator, Pixel 3 (API 30)
*/

// iOS: No error, but padding has no effect.
// Android: No error, and padding works.
const padding1 = {
  paddingTop: 0,
  paddingBottom: 0,
};

// iOS: No error, but padding has no effect.
// Android: No error, and padding works.
const padding2 = {
  paddingTop: 0,
  paddingBottom: 63,
};

// iOS: Error, and padding has no effect.
// Android: No error, and padding works.
const padding3 = {
  paddingTop: 0,
  paddingBottom: 64,
};

// iOS: Error, and padding has no effect.
// Android: No error, and padding works.
const padding4 = {
  paddingTop: 1,
  paddingBottom: 63,
};

// iOS: No error, but padding has no effect.
// Android: No error, and padding works.
const padding5 = {
  paddingTop: 31,
  paddingBottom: 32,
};

// iOS: Error, and padding has no effect.
// Android: No error, and padding works.
const padding6 = {
  paddingTop: 32,
  paddingBottom: 32,
};

const padding = padding1;

class MapView extends React.Component {
  static propTypes = {
  };

  constructor(props) {
    super(props);
  }

  renderContents = () => {
    const point = {
      "type": "Point",
      "coordinates": [longitude, latitude]
    };

    return (
      <MapboxGL.ShapeSource
        id={'source'}
        shape={point}
      >
        <MapboxGL.CircleLayer
          id={'circle-big'}
          style={{
            circleRadius: 20,
            circleColor: 'white',
            circleStrokeColor: 'black',
            circleStrokeWidth: 1,
            iconAllowOverlap: true,
            circlePitchScale: 'viewport',
          }}
        />
      </MapboxGL.ShapeSource>
    );
  };

  render() {
    return (
      <MapboxGL.MapView
        ref={(c) => (this._map = c)}
        onPress={this.onPress}
        style={{flex: 1}}
      >
        <MapboxGL.Camera
          zoomLevel={9}
          bounds={{
            ne: [longitude - boundsEdge, latitude + boundsEdge],
            sw: [longitude + boundsEdge, latitude - boundsEdge],
            ...padding,
          }}
        />

        {this.renderContents()}
      </MapboxGL.MapView>
    );
  }
}

export default MapView;