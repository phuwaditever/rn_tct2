import React from 'react';
import React, { Component } from 'react';
import { Text , View } from 'react-native';
import LoginForm from '../forms/LoginForm';

// const LoginPage = () => <Text>Login Page</Text>;
class LoginPage extends Component {
    render() {
        return (
            <LoginForm />
        );
    }
}

export default LoginPage;
