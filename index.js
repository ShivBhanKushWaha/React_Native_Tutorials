/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// redux ko use krne ke liye provider ke andar wrap krna pdegea 
import { Provider } from 'react-redux';
import store from './components/Redux/reduxOperations/store';

const AppShoppingCart = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => AppShoppingCart);
