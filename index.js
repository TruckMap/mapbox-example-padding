/**
 * @format
 */

import {AppRegistry} from 'react-native';
import MapboxGL from "@react-native-mapbox-gl/maps";
import MapView from './MapView';
import {name as appName} from './app.json';

MapboxGL.setAccessToken('');

AppRegistry.registerComponent(appName, () => MapView);
