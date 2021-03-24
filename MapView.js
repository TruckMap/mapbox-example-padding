import React from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';

const MapView = () => {
  const latitude = 40.723279;
  const longitude = -73.970895;

  const centerPoint = {
    "type": "Point",
    "coordinates": [longitude, latitude],
  };

  return (
    <MapboxGL.MapView
      onLayout={(e) => {}}
      onPress={this.onPress}
      style={{ flex: 1 }}
    >
      <MapboxGL.Camera
        centerCoordinate={centerPoint.coordinates}
        zoomLevel={9}
      />

      <MapboxGL.ShapeSource
        id={'circleSource'}
        shape={centerPoint}
      >
        <MapboxGL.CircleLayer
          id={'circleLayer'}
          style={{
            circleRadius: 6,
            circleColor: '#f74d91',
            circleStrokeColor: 'white',
            circleStrokeWidth: 2,
          }}
        />
      </MapboxGL.ShapeSource>
    </MapboxGL.MapView>
  );
}

export default MapView;