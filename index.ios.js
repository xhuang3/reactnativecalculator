// import components
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import Button from './src/button';

var NUMKEYS = [['0', '1', '2', '3'],['4', '5', '6'],['7', '8', '9']];
var OPKEYS = ['+', '-', '*', '/'];

// create components
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: '',
      firstNum: '',
      secondNum: '',
      operator: '',
      isFirst: true,
    };
  }
  
  render() {
    return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{this.state.output}</Text>
      </View>
      <View style={styles.footer}>
        {this.keys()}
        {this.operators()}
        {this.equal()}
      </View>
    </View>
  }
                                   
  keys() {
    return NUMKEYS.map((row) => {
      return <View style={styles.rowWrapper}>{
        row.map((key) => {
          return <Button 
                   text={key}
                   onPress={() => this.numkeyPressed(key)}/>
        })
      }</View>

    });
  }
  
  operators() {
    return <View style={styles.rowWrapper}>{OPKEYS.map((key) => {
      return <Button
               text={key}
               onPress={() => this.opkeyPressed(key)}/>
    })}</View>
  }
  
  equal() {
    return <Button
             text='='
             onPress={() => this.equalPressed()}/>
  }

  numkeyPressed(key) {
    var currentNum = this.state.isFirst ? this.state.firstNum : this.state.secondNum;
    currentNum = currentNum + key;
    if(this.state.isFirst) {
      this.setState({
        firstNum: currentNum,
        output: currentNum
      });
    }else{
      this.setState({
        secondNum: currentNum,
        output: currentNum
      });
    }
  }

  opkeyPressed(key) {
    this.setState({
      operator: key,
      isFirst: false,
      output: key
    });
  }
  
  equalPressed() {
    var outputNum = 0;
    var firstNum = parseInt(this.state.firstNum);
    var secondNum = parseInt(this.state.secondNum);
    
    switch(this.state.operator)
    {
      case '+':
        outputNum = firstNum + secondNum;
        break;
      case '-':
        outputNum = firstNum - secondNum;
        break;
      case '*':
        outputNum = firstNum * secondNum;
        break;
      case '/':
        outputNum = firstNum / secondNum;
        break;
    }
    
    this.setState({
      output: outputNum,
      isFirst: true,
      firstNum: '',
      secondNum: '',
    })
  }
}

// stylesheet
var styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 5,
  },
  headerText: {
    fontSize: 60,
  },
  rowWrapper: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

// add to registry 
AppRegistry.registerComponent('TestProject', () => Calculator);