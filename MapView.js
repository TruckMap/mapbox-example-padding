import React, { useEffect, useState, useRef } from 'react';
import { Animated, Easing } from 'react-native';

import MapboxGL from '@react-native-mapbox-gl/maps';
const { ShapeSource, AnimatedPoint } = MapboxGL;
const AnimatedShapeSource = Animated.createAnimatedComponent(ShapeSource);

const increment = 0.001;
const duration = 1000;

const MapView = () => {
  const [coordinates, setCoordinates] = useState([-73.970895, 40.723279]);
  const point = { type: "Point", coordinates };
  const animatedPoint = useRef(new AnimatedPoint(point)).current;

  const tick = () => {
    const coordinatesNext = [coordinates[0] + increment, coordinates[1] + increment];
    setCoordinates(coordinatesNext);
    animatedPoint.timing({
      coordinates: coordinatesNext,
      easing: Easing.linear,
      duration: duration,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    setTimeout(tick, duration);
  }, coordinates);

  return (
    <MapboxGL.MapView
      onLayout={(e) => {}}
      onPress={this.onPress}
      style={{ flex: 1 }}
    >
      <MapboxGL.Camera
        centerCoordinate={coordinates}
        zoomLevel={15}
        animationDuration={duration}
      />

      <AnimatedShapeSource
        id={'circleSource'}
        shape={animatedPoint}
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
      </AnimatedShapeSource>
    </MapboxGL.MapView>
  );
}

export default MapView;