// Step1: import libraries
import React, {Component} from 'react';
import ReactNative,{ StyleSheet, Text, View} from 'react-native';
import Product from './src/components/Product';
// Step2: Create Component
class Main extends Component {
  render(){
    return(
      <View>
        <Product name='Nokia'/>
        <Product name='Android'/>
        <Product name='iPhone'/>
      </View>
    );
  }
}

// Step3: export the component
export default Main;
// Register Component to App
ReactNative.AppRegistry.registerComponent('AwesomeProject', () => Main);
