/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Routes from './src/routes/routes';
import Home from './src/screens/home/home';

AppRegistry.registerComponent(appName, () => Routes);
