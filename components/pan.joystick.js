'use strict'

import React, { Component } from 'react';
import {
    PanResponder,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class PanJoystick extends Component {
    static defaultProps = {
        initialPos: { x: 0, y: 0 }
    };
    _top = this.props.initialPos.y;
    _left = this.props.initialPos.x;
    componentWillMount() {
        this._top = this.props.initialPos.y;
        this._left = this.props.initialPos.x;
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderGrant: this._handlePanResponderGrant,
            onPanResponderMove: this._handlePanResponderMove,
            onPanResponderRelease: this._handlePanResponderEnd,
            onPanResponderTerminate: this._handlePanResponderEnd,
        })
    };
    _handlePanResponderGrant = (e, gs) => {
        const handler = this.handler;
        handler && handler.setNativeProps({
            style: {
                borderWidth: 5,
                backgroundColor: 'transparent'
            }
        })
    };
    _handlePanResponderMove = (e, gs) => {
        let top = this._top + gs.dy;
        let left = this._left + gs.dx;
        const handler = this.handler;
        handler && handler.setNativeProps({
            style: {
                top: top,
                left: left
            }
        })
        this.props.didMoved && this.props.didMoved(left, top);
    };
    _handlePanResponderEnd = (e, gs) => {
        const handler = this.handler;
        handler && handler.setNativeProps({
            style: {
                borderWidth: 0,
                backgroundColor: '#000000',
                top: this.props.initialPos.y,
                left: this.props.initialPos.x
            }
        })
        this._top = this.props.initialPos.y;
        this._left = this.props.initialPos.x;
        this.props.didEnd && this.props.didEnd()
    }
    render() {
        return (
            <View
                style={[this.props.style, {top: this._top, left: this._left}]}
                ref={(handler) => {
                    this.handler = handler;
                }}
                {...this._panResponder.panHandlers}
            />
        )
    };
}

const styles = StyleSheet.create({
    
})

module.exports = PanJoystick;