import React from 'react';
import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import LoginPage from '../pages/LoginPage';

class LoginForm extends Component{ 
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
        //this.onChange = this.onChange.bind(this);
    }

    onSubmit(){
        console.log('onSubmit',this.state);
    }
    render(){
        return(
            <View style ={{padding:10}}>
                <Text>Login</Text>
                <TextInput 
                    style={{backgroundColor:'pink'}}
                    placeholder="email"
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput 
                    style={{backgroundColor:'pink',marginTop:10,marginBottom:10}}
                    secureTextEntry = 'true'
                    placeholder="password"
                />
            </View>
        );
    }
}

export default LoginForm;
