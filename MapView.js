import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

const latitude = 40.723279;
const longitude = -73.970895;

const MapView = () => {
  const point = {
    "type": "Point",
    "coordinates": [longitude, latitude],
  };

  return (
    <MapboxGL.MapView
      ref={(c) => (this._map = c)}
      onLayout={(e) => {}}
      onPress={this.onPress}
      style={{ flex: 1 }}
    >
      <MapboxGL.Camera
        zoomLevel={9}
      />

      <MapboxGL.ShapeSource
        id={'source'}
        shape={point}
      >
        <MapboxGL.CircleLayer
          id={'circle'}
          style={{
            circleRadius: 10,
            circleColor: 'green',
            circleStrokeColor: 'black',
            circleStrokeWidth: 1,
          }}
        />
      </MapboxGL.ShapeSource>

      <View style={{
        flex: 0,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        padding: 30,
        width: '100%',
      }}>
        TODO
      </View>
    </MapboxGL.MapView>
  );
}

export default MapView;