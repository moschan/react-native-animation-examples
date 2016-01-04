'use strict';

import Style from './Style.js'
import Panel from './Panel.js'

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  LayoutAnimation,
  TouchableWithoutFeedback,
} = React;


var LayoutAnimationExample = React.createClass({
  componentWillMount() {
    // Animate creation
    LayoutAnimation.spring();
  },

  getInitialState() {
    return { w: 100, h: 100 }
  },

  _onPress() {
    // Animate the update
    LayoutAnimation.spring();
    this.setState({w: this.state.w + 15, h: this.state.h + 15})
  },

  render: function() {
    return (
      <Panel title={'LayoutAnimation'} >
        <View style={Style.panel}>
          <TouchableWithoutFeedback onPress={this._onPress}>
            <View style={[{backgroundColor: '#123abc', width: this.state.w, height: this.state.h}]}>
            </View>
          </TouchableWithoutFeedback>
        </View>
        </Panel>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

module.exports = LayoutAnimationExample

