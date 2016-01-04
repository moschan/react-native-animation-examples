'use strict';

import Style from './Style.js'

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;


class Panel extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
    };
  }
  render(): ReactElement {
    return (
      <View style={Style.panel}>
        <Text style={Style.panelTitle}>{this.props.title}</Text>
        <View style={Style.panelBody}>
          {this.props.children}
        </View>
        <View style={Style.panelFooter}></View>
      </View>

    );
  }
}

module.exports = Panel
