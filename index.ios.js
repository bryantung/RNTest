/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict'

import Dimensions from 'Dimensions';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
var EmotionRegion = require('./components/emotion.region')
var PanJoystick = require('./components/pan.joystick')

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width
const joystickSize = {width: 50, height: 50}
const joystickInitPos = {
  x: windowWidth/2 - joystickSize.width/2,
  y: windowHeight/2 - joystickSize.height/2
}

export default class RNTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRegion: -1
    }
  };
  onJoystickDidMoved = (x, y) => {
    let _x = x + joystickSize.width/2;
    let _y = y + joystickSize.height/2;
    if (_x > windowWidth/2) {
      if (_y > windowHeight/2) {
        this.setState({
          currentRegion: 3
        })
      } else {
        this.setState({
          currentRegion: 1
        })
      }
    } else {
      if (_y > windowHeight/2) {
        this.setState({
          currentRegion: 2
        })
      } else {
        this.setState({
          currentRegion: 0
        })
      }
    }
  };
  onJoystickDidEnd = () => {
    this.setState({ currentRegion: -1 })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <EmotionRegion rid={0} style={{backgroundColor:'#ffffff'}} />
          <EmotionRegion rid={1} style={{backgroundColor:'#ff0000'}} />
        </View>
        <View style={styles.row}>
          <EmotionRegion rid={2} style={{backgroundColor:'#00ff00'}} />
          <EmotionRegion rid={3} style={{backgroundColor:'#0000ff'}} />
        </View>
        <PanJoystick style={styles.joystick} initialPos={joystickInitPos} didMoved={this.onJoystickDidMoved} didEnd={this.onJoystickDidEnd} />
        <Text style={styles.debugRegion}>
          {this.state.currentRegion}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cccccc',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  joystick: {
    position: 'absolute',
    width: joystickSize.width,
    height: joystickSize.height,
    backgroundColor: '#000000',
    borderColor: '#000000',
    borderRadius: joystickSize.width/2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  debugRegion: {
    position: 'absolute',
    width: windowWidth,
    top: 20,
    left: 0,
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('RNTest', () => RNTest);
