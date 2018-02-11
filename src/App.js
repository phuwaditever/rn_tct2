console.log('app component is working.');
import React, { Component } from 'react';
<<<<<<< HEAD
import { Text,View } from 'react-native';
import Navbar from './component/Navbar';
import LoginPage from './components/pages/LoginPage';
import LoginForm from './components/forms/LoginForm';
=======
import { Text, View } from 'react-native';
import Navbar from './components/Navbar';
import LoginPage from './components/pages/LoginPage';
>>>>>>> 174fdf3ca7b3e4b3342b7294a102a058a0f23a69

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
<<<<<<< HEAD
      <View>
        <Navbar/>
        <LoginPage/>
      </View>
=======
        <View>
          <Navbar/>
          <LoginPage />
        </View>
>>>>>>> 174fdf3ca7b3e4b3342b7294a102a058a0f23a69
      );
    }
}
