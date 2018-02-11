import React from 'react';
<<<<<<< HEAD
import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import LoginPage from '../pages/LoginPage';

class LoginForm extends Component{ 
    constructor(props){
        super(props);
=======
import { 
    View, Text,
    TextInput, Button
} from 'react-native';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

>>>>>>> 174fdf3ca7b3e4b3342b7294a102a058a0f23a69
        this.state = {
            email: '',
            password: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
<<<<<<< HEAD
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
=======
    }

    onSubmit() {
        console.log('onSubmit', this.state);
    }
    
    render() {
        return (
            <View style={{ padding: 10 }} >
                <Text>Login</Text>
                <TextInput
                    style={{ padding: 5, height: 40, borderColor: 'orange', borderWidth: 1}}
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                    placeholder="prawee@hotmail.com"
                />

                <TextInput 
                    style={{padding: 5, marginTop: 5, height: 40, borderColor: 'orange', borderWidth: 1}}
                    placeholder="Password"
                    secureTextEntry
>>>>>>> 174fdf3ca7b3e4b3342b7294a102a058a0f23a69
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                />
                <Button 
                    title="Login"
                    onPress={this.onSubmit}
                />
            </View>
        );
    }
}

<<<<<<< HEAD
export default LoginForm;
=======
export default LoginForm;
>>>>>>> 174fdf3ca7b3e4b3342b7294a102a058a0f23a69
