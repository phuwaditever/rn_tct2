console.log('app component is working.');
import React, { Component } from 'react';
import { Text,View } from 'react-native';
import Navbar from './component/Navbar';
import LoginPage from './components/pages/LoginPage';
import LoginForm from './components/forms/LoginForm';

export default class App extends Component {
  componentDidMount() {
    console.log('componentDidMount()');
  }
  componentWillMount() {
    console.log('componentWillMount()');
  }
  render() {
    console.log('render()');
    return (
      <View>
        <Navbar/>
        <LoginPage/>
      </View>
      );
    }
}
