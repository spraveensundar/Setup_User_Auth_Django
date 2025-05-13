/**
 * @format
 */
import { AppRegistry } from 'react-native';
import { RootSiblingParent } from 'react-native-root-siblings';
import { Provider } from 'react-redux';

import App from './src/App';
import store from './src/components/store';
import { name as appName } from './app.json';

const Root = () => (
    <RootSiblingParent>
        <Provider store={store}>
            <App />
        </Provider>
    </RootSiblingParent>

);

AppRegistry.registerComponent(appName, () => Root);