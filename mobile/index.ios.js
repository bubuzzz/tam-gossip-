import React from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class mobile extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return ( <Text> Hello World </Text>);
  }
}

AppRegistry.registerComponent( 'mobile', () => mobile );
