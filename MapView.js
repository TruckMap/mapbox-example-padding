import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

const latitude = 40.723279;
const longitude = -73.970895;
const boundsEdge = 0.002;

class MapView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mapHeight: 0,
      paddingBottom: 0,
    };
  }

  renderButton = (text, onPress) => {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          height: 40,
          margin: 5,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'gray',
        }}
        onPress={onPress}
      >
        <Text>{text}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { mapHeight, paddingBottom } = this.state;

    const padding = {
      paddingTop: 0,
      paddingBottom,
    };

    const point = {
      "type": "Point",
      "coordinates": [longitude, latitude],
    };

    return (
      <MapboxGL.MapView
        ref={(c) => (this._map = c)}
        onLayout={(e) => this.setState({ mapHeight: e.nativeEvent.layout.height })}
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
          {this.renderButton('0', () => this.setState({ paddingBottom: 0 }))}
          {this.renderButton('Height / 4', () => this.setState({ paddingBottom: mapHeight / 4 }))}
          {this.renderButton('Height / 2', () => this.setState({ paddingBottom: mapHeight / 2 }))}
          {this.renderButton('Height', () => this.setState({ paddingBottom: mapHeight }))}
        </View>
      </MapboxGL.MapView>
    );
  }
}

export default MapView;