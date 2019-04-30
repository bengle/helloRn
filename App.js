/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { NativeRouter, Route } from "react-router-native";
import configureStore from './src/configureStore';
import ArticalList from './src/pages/list';
import DetailPage from './src/pages/detial';
const store = configureStore({})

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <View style={{ flex: 1 }}>
            <Route path='/' exact component={ArticalList} />
            <Route path='/topic/:id' component={DetailPage} />
          </View>
        </NativeRouter>
      </Provider>
    );
  }
}
