// Step1: import libraries
import React, {Component} from 'react';
import{StyleSheet, Text, Button, View, Alert} from 'react-native';

// Step2: Create Component
export default class Main extends Component {

  state = {
    amount: 0
  }


  buy=() => this.setState({
      amount: this.state.amount + 1
    })


  show(){
    Alert.alert('You clicked me!');
  }

  render(){
    return(
      <View>
        <Text style = {style.textStyle}>{this.props.name}</Text>
        <Text style = {style.textStyle}>Amount: {this.state.amount}</Text>
        <Button title='Buy' onPress={this.buy} />
      </View>
    );
  }
}

const style = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    padding: 20
  }
});
