'use strict';

var React = require('react-native');
var {
  StyleSheet,
} = React;


var Style = StyleSheet.create({
  panel: {
    flex:1,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    justifyContent: 'center',
  },

  panelTitle: {
    fontSize: 20,
    padding: 5,
    backgroundColor: '#123456',
    color: '#fafafa',
  },

  panelBody: {
    padding: 20,
  },

  panelFooter: {
  },

  pressMe: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  pressMeText: {
    fontSize: 14,
  },

  box: {
    width: 100,
    height: 100,
    backgroundColor:'#F00',
  }

});


module.exports = Style
