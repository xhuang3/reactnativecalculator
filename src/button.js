import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

module.exports = React.createClass({
  render () {
    return <TouchableHighlight
             underlayColor='gray'
             onPress={this.props.onPress} 
             style={styles.container}>
      <Text style={styles.text}>
        {this.props.text}
      </Text>
    </TouchableHighlight>
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#66FFFF',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    height: 60,
    width: 60,
  },
  text: {
    fontSize: 30,
  }
})