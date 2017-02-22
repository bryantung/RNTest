/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict'

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
var AppCommon = require('./common.index')

export default class RNTest extends Component {
  render() {
    return (
      <AppCommon />
    );
  }
}

AppRegistry.registerComponent('RNTest', () => RNTest);
