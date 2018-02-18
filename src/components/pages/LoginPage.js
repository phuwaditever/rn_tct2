import React from 'react';
import React, { Component } from 'react';
import { Text , View } from 'react-native';
import LoginForm from '../forms/LoginForm';

// const LoginPage = () => <Text>Login Page</Text>;
class LoginPage extends Component {
    componentWillMount(){
        //initial firebase
    }
    submit(){
        console.log('Submit on LoginForm');
        //call firebase
        //data.email ,data.password =>firebase
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
