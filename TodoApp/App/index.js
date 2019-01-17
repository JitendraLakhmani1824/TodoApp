import React from 'react';
import { View, AsyncStorage } from 'react-native';
import * as reducers from './Reducers';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react';
import Navigation from './Navigation/Navigation';

const persistConfig = { key: 'root', storage }
const persistedReducer = persistReducer(persistConfig, combineReducers(reducers))
const store = createStore(persistedReducer, applyMiddleware(thunk))
const persistor = persistStore(store);

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Navigation />
                </PersistGate>
            </Provider>
        )
    }
}