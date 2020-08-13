import React, {Component} from 'react';
import {Text, ScrollView, TextInput, Image, TouchableOpacity} from 'react-native';
import loginViewStylesheet from './loginViewStyleSheet';
import Colors from "../../config/colors";

const logo = require('../../../assets/images/logo.png');

export default class LoginView extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    login() {
// login Validation :
        fetch('https://maxpoweradmin.000webhostapp.com/api/login.php',
            {
                method: 'POST',
                headers:
                    {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                body: JSON.stringify(
                    {
                        username: this.state.username,

                        password: this.state.password,

                    })

            }).then((response) => response.json()).then((responseJson) => {
            if (responseJson === 'okay') {
                this.props.navigation.navigate('tabContainer');
            }
            else {
                alert("Information incorrectes contactez l'admin")
            }
        }).catch((error) => {
            console.error(error);
            if (error) {
                alert('Reseau non disponible')
            }
        });

    }

    render() {
        return (
            <ScrollView style={{backgroundColor: '#f2f2f2ff'}}>
                <Image source={logo} style={loginViewStylesheet.ImageStyle}/>
                <Text style={loginViewStylesheet.loginText}>
                    Identifiant
                </Text>
                <TextInput style={loginViewStylesheet.InputText} placeholder="Entrer l'identifiant"
                           onChangeText={TextInputValue => this.setState({username: TextInputValue})}></TextInput>
                <Text style={loginViewStylesheet.mdpText}>
                    Mot De Passe
                </Text>
                <TextInput style={loginViewStylesheet.InputText} placeholder='Entrer le mot de passe'
                           secureTextEntry={true}
                           onChangeText={TextInputValue => this.setState({password: TextInputValue})}></TextInput>
                <TouchableOpacity onPress={_ => {
                    return this.login();
                }} style={loginViewStylesheet.ButtonStyle}><Text
                    style={loginViewStylesheet.textOnButton}>S'authentifier</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}
