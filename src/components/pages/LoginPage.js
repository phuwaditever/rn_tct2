import React from 'react';
import React, { Component } from 'react';
import { Text , View } from 'react-native';
import LoginForm from '../forms/LoginForm';

// const LoginPage = () => <Text>Login Page</Text>;
class LoginPage extends Component {
    submit(){
        console.log('Submit on LoginForm');
    }
    render() {
        return (
            <LoginForm 
            submit = {this.submit}
            />
        );
    }
}

export default LoginPage;
