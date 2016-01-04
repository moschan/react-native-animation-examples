/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import AnimatedExamples from './lib/AnimatedExample.js'
import LayoutAnimationExamples from './lib/LayoutAnimationExample.js'
import Panel from './lib/Panel.js'

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  LayoutAnimation,
  TouchableOpacity,
} = React;


var animation = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>React Native Animation Gallery</Text>
        <Panel title={'AnimatedExamples'}>
          <AnimatedExamples />
        </Panel>
        <LayoutAnimationExamples />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('animation', () => animation);
