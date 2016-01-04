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


class Example extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(1),
    };
  }
  render(): ReactElement {
    return (
      <Panel title={'Spring'} >
        <TouchableWithoutFeedback onPress={() => {this._onPress()}}>
          <Animated.View
            style={[
              Style.box,
              {
                transform: [                        // `transform` is an ordered array
                  {scale: this.state.bounceValue},  // Map `bounceValue` to `scale`
                ]
              }
            ]}
          >
            <View style={Style.pressMe}>
              <Text style={Style.pressMeText}>Press me!</Text>
            </View>
          </Animated.View>
        </TouchableWithoutFeedback>
      </Panel>
    );
  }
  componentDidMount() {
    // this._animation()
  }
  _onPress() {
    this._animation()
  }
  _animation() {
    this.state.bounceValue.setValue(1.5);     // Start large
    Animated.spring(                          // Base: spring, decay, timing
      this.state.bounceValue,                 // Animate `bounceValue`
      {
        toValue: 1,                         // Animate to smaller size
        friction: 1,                          // Bouncier spring
      }
    ).start();                                // Start the animation
  }
}

module.exports = Example
