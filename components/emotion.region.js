'use strict'

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class EmotionRegion extends Component {
    static defaultProps = {
        rid: 0
    };
    states = {

    };
    render() {
        return (
            <View style={[styles.region, this.props.style]}>
                <Text style={styles.text}>
                    Region {this.props.rid}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    region: {
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#333333'
    },
});

module.exports = EmotionRegion;