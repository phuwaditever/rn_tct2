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
            },
            disabled: true
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.checkEmail = this.checkEmail.bind(this);
        this.checkPassword = this.checkPassword.bind(this);
        this.Validate = this.Validate.bind(this);
    }

    Validate(type,value){
        if(this.state.password.length<7){
            this.setState({errors: {...this.state.errors, password:'more than 8'}});
            this.setState({disabled:true});
        }            
        else{
            this.setState({errors: {...this.state.errors, password:''}});
            this.setState({disabled:false});
        }  

        if(!Validator.isEmail(this.state.email)){
            this.setState({errors: {...this.state.errors, email:'not email format'}});
            this.setState({disabled:true});
        }            
        else{
            this.setState({errors: {...this.state.errors, email:''}});  
            this.setState({disabled:false});
        }
    }

    // checkPassword(){
    //     if(this.state.password.length<7){
    //         this.setState({errors: {...this.state.errors, password:'more than 8'}});
    //         this.setState({disabled:true});
    //     }            
    //     else{
    //         this.setState({errors: {...this.state.errors, password:''}});
    //         this.setState({disabled:false});
    //     }            
    // }
    // checkEmail(){
    //     if(!Validator.isEmail(this.state.email)){
    //         this.setState({errors: {...this.state.errors, email:'not email format'}});
    //         this.setState({disabled:true});
    //     }            
    //     else{
    //         this.setState({errors: {...this.state.errors, email:''}});  
    //         this.setState({disabled:false});
    //     }
            
    // }
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
                    // onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                    onChange={this.Validate}
                    // onBlur={this.checkEmail}
                />
                <Text>{this.state.errors.email}</Text>
                <TextInput 
                    style={{backgroundColor:'pink',marginTop:10,marginBottom:10}}
                    secureTextEntry = 'true'
                    placeholder="password"
                    // onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}  
                    onChange={this.Validate}                  
                    // onKeyPress={this.checkPassword}
                />
                <Text>{this.state.errors.password}</Text>
                <Button
                    disabled
                    color="green"
                    title="LOGIN"
                    onPress={this.disabled}                                   
                />
            </View>
        );
    }
}

export default LoginForm;
