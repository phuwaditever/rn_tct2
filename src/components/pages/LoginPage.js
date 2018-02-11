<<<<<<< HEAD
import React from 'react';
import React, { Component } from 'react';
import { Text , View } from 'react-native';
import LoginForm from '../forms/LoginForm';

//const LoginPage = () => <Text>Login Page</Text>;
=======
import React, { Component } from 'react';
import { Text } from 'react-native';
import LoginForm from '../forms/LoginForm';

// const LoginPage = () => <Text>Login Page</Text>;
>>>>>>> 174fdf3ca7b3e4b3342b7294a102a058a0f23a69

class LoginPage extends Component {
    render() {
        return (
            <LoginForm />
        );
    }
}

export default LoginPage;
