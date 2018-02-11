import React from 'react';
import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Validator from 'validator';
import LoginPage from '../pages/LoginPage';

class LoginForm extends Component{ 
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {
                email:'',
                password:''
            }
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.checkError = this.checkError.bind(this);
        this.checkPassword = this.checkPassword.bind(this);
        //this.onChange = this.onChange.bind(this);
    }
    checkPassword(){
        //homework
        console.log('checkPassword',this.state.password);
        if(this.state.password<8)
             this.setState({errors: {password:'not ok'}})
        else
            this.setState({errors: {password: ''}});
    }
    checkError(){
        console.log('checkEmail',this.state.email);
        if(!Validator.isEmail(this.state.email))
            this.setState({errors: {email:'not email' , password:''}})
        else
            this.setState({errors: {email:'' , password: ''}});
    }
    onSubmit(){
        // console.log('onSubmit',this.state);
        const { errors } = this.state;
        if
        (
            errors.email == '' && errors.password == '' &&
            this.state.email !=='' && this.state.password !== ""
        ){
            console.log('go to api');
            this.props.submit(this.state);
        }
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
                    onBlur={this.checkEmail}
                />
                <Text>{this.state.errors.email}</Text>
                <TextInput 
                    style={{backgroundColor:'pink',marginTop:10,marginBottom:10}}
                    secureTextEntry = 'true'
                    placeholder="password"
                    onBlur={this.checkPassword}
                />
                <Text>{this.state.errors.password}</Text>
            </View>
        );
    }
}

export default LoginForm;
