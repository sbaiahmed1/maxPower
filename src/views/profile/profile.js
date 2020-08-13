import React, {Component} from 'react'
import {Image, Button, ScrollView, Text, CheckBox, TouchableOpacity, Alert, TextInput, Picker} from 'react-native';
import {Colors, GlobalSheet} from "../../config/";
//import openMap from 'react-native-open-maps';
import getDirections from 'react-native-google-maps-directions'
import profileStyleSheet from "./profileStyleSheet";
import formClientStyleSheet from "../formClient/formClientStyleSheet";

export default class Profile extends Component {
    static navigationOptions = {
        headerTitle: 'Profile',
        headerTitleStyle: {color: Colors.powerRed}

    };
    jsonDataProfile = this.props.navigation.state.params.jsonDataProfile[0];
    product1 = this.product1State(this.jsonDataProfile.product1);
    product2 = this.product1State(this.jsonDataProfile.product2);
    product3 = this.product1State(this.jsonDataProfile.product3);
    product4 = this.product1State(this.jsonDataProfile.product4);
    product5 = this.product1State(this.jsonDataProfile.product5);
    product6 = this.product1State(this.jsonDataProfile.product6);
    /*deleteWithId = () => {
        Alert.alert(
            'Important',
            'Supprimer ce client ?',
            [
                {
                    text: 'Annuler',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {text: 'Oui', onPress: () => this.delete()},
            ],
            {cancelable: false},
        );
    }
    delete = () => {

        fetch('https://maxpoweradmin.000webhostapp.com/api/deleteId.php',
            {
                method: 'POST',
                headers:
                    {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                body: JSON.stringify(
                    {
                        id: this.jsonDataProfile.id,
                    })

            })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson === 'Supression avec sucess') {
                    alert(responseJson);
                    this.props.navigation.navigate('query')
                }
                else {
                    alert(responseJson)
                }
            })
            .catch((error) => {
                console.error(error);
            })
    }*/
    handleGetDirections = () => {
        const data = {
            destination: {
                latitude: this.state.latitude,
                longitude: this.state.longitude
            },
            params: [
                {
                    key: "travelmode",
                    value: "driving"        // may be "walking", "bicycling" or "transit" as well
                },
                {
                    key: "dir_action",
                    value: "navigate"       // this instantly initializes navigation using the given travel mode
                }
            ]
        }

        getDirections(data)
    }
    updateData = () => {
        if (this.state.place === '') {
            alert('Choisissez une ville valide')
        }
        else if (this.state.name === '') {
            alert('Donner un nom valide')
        }
        else if ((this.state.longitude === '') && (this.state.latitude === '')) {
            alert('Localisation pas valide')
        }
        else if (isNaN(this.state.phone) === true) {
            alert('Numero telephone pas valide')
        }
        else if (this.state.phone === '') {
            alert('Num doit pas etre vide')
        }
        else {
            fetch('https://maxpoweradmin.000webhostapp.com/api/update.php',
                {
                    method: 'POST',
                    headers:
                        {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                    body: JSON.stringify(
                        {
                            id: this.jsonDataProfile.id,

                            name: this.state.name,

                            phone: this.state.phone,

                            phone2: this.state.phone2,

                            place: this.state.place,

                            projectName: this.state.projectName,

                            product1: this.state.product1,

                            product2: this.state.product2,

                            product3: this.state.product3,

                            product4: this.state.product4,

                            product5: this.state.product5,

                            product6: this.state.product6,

                            responsableName: this.state.responsableName,

                            status: this.state.status,

                            interest: this.state.interest
                        })

                }).then((response) => response.json()).then((responseJson) => {
                alert(responseJson);
                this.props.navigation.navigate('query')
            }).catch((error) => {
                console.error(error);
            });
        }
    };
    updateWithId = () => {
        Alert.alert(
            'Important',
            'Mettre a jour ce client ?',
            [
                {
                    text: 'Non',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {text: 'Oui', onPress: () => this.updateData()},
            ],
            {cancelable: false},
        );
    }

    constructor(props) {
        super(props)
        this.state = {
            name: this.jsonDataProfile.name,
            place: this.jsonDataProfile.place,
            projectName: this.jsonDataProfile.projectName,
            responsableName: this.jsonDataProfile.responsableName,
            latitude: Number(this.jsonDataProfile.latitude),
            longitude: Number(this.jsonDataProfile.longitude),
            product1: this.product1,
            product2: this.product2,
            product3: this.product3,
            product4: this.product4,
            product5: this.product5,
            product6: this.product6,
            phone: this.jsonDataProfile.phone,
            phone2: this.jsonDataProfile.phone2,
            interest: this.jsonDataProfile.interest,
            status: this.jsonDataProfile.status,
            ImageName: this.jsonDataProfile.ImageName,
            municipalite:this.jsonDataProfile.municipalite
        }
    }

    product1State(x) {
        if (x === '1') {
            return true
        }
        else return false
    }

    render() {
        return (
            <ScrollView style={{backgroundColor: '#f2f2f2ff'}}>
                <Image style={{marginTop: '5%', borderColor: 'red', width: 300, height: 200, alignSelf: 'center'}}
                       source={{uri: 'http://self-seeking-matche.000webhostapp.com/images/' + this.state.ImageName}}/>
                <Text style={profileStyleSheet.loginText}>Nom du projet</Text>
                <TextInput
                    onChangeText={TextInputValue => this.setState({projectName: TextInputValue})}
                    style={profileStyleSheet.InputText}>{this.state.projectName}</TextInput>
                <Text style={profileStyleSheet.loginText}>Nom du responsable </Text>
                <TextInput
                    onChangeText={TextInputValue => this.setState({responsableName: TextInputValue})}
                    style={profileStyleSheet.InputText}>{this.state.responsableName}</TextInput>
                <Text style={profileStyleSheet.loginText}>Prenom du responsable </Text>
                <TextInput
                    onChangeText={TextInputValue => this.setState({name: TextInputValue})}
                    style={profileStyleSheet.InputText}>{this.state.name}</TextInput>
                <Text style={profileStyleSheet.loginText}>Ville </Text>
                <Picker
                    selectedValue={this.state.place}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({place: itemValue})
                    } mode="dialog">
                    <Picker.Item label='Selectionner une ville' value=''/>
                    <Picker.Item label="Ariana" value="Ariana"/>
                    <Picker.Item label="Beja" value="Beja"/>
                    <Picker.Item label="Ben Arous" value="Ben Arous"/>
                    <Picker.Item label="Bizerte" value="Bizerte"/>
                    <Picker.Item label="Gabes" value="Gabes"/>
                    <Picker.Item label="Gafsa" value="Gafsa"/>
                    <Picker.Item label="Jendouba" value="Jendouba"/>
                    <Picker.Item label="Kairouan" value="Kairouan"/>
                    <Picker.Item label="Kasserine" value="Kasserine"/>
                    <Picker.Item label="Kebili" value="Kebili"/>
                    <Picker.Item label="La Manouba" value="La Manouba"/>
                    <Picker.Item label="Le Kef" value="Le Kef"/>
                    <Picker.Item label="Mahdia" value="Mahdia"/>
                    <Picker.Item label="Medenine" value="Medenine"/>
                    <Picker.Item label="Monastir" value="Monastir"/>
                    <Picker.Item label="Nabeul" value="Nabeul"/>
                    <Picker.Item label="Sfax" value="Sfax"/>
                    <Picker.Item label="Sidi Bouzid" value="Sidi Bouzid"/>
                    <Picker.Item label="Siliana" value="Siliana"/>
                    <Picker.Item label="Sousse" value="Sousse"/>
                    <Picker.Item label="Tataouine" value="Tataouine"/>
                    <Picker.Item label="Tozeur" value="Tozeur"/>
                    <Picker.Item label="Tunis" value="Tunis"/>
                    <Picker.Item label="Zaghouan" value="Zaghouan"/>
                </Picker>
                <Text style={profileStyleSheet.loginText}>Municipalite</Text>
                <TextInput
                    onChangeText={TextInputValue => this.setState({municipalite: TextInputValue})}
                    style={profileStyleSheet.InputText}>{this.state.municipalite}</TextInput>
                    <Text style={profileStyleSheet.loginText}>Telephone </Text>
                    <TextInput
                        onChangeText={TextInputValue => this.setState({phone: TextInputValue})}
                        style={profileStyleSheet.InputText}>{this.state.phone}</TextInput>
                    <Text style={profileStyleSheet.loginText}>Telephone 2 </Text>
                    <TextInput
                        onChangeText={TextInputValue => this.setState({phone2: TextInputValue})}
                        style={profileStyleSheet.InputText}>{this.state.phone2}</TextInput>
                    <Text style={profileStyleSheet.loginText}>Status du local </Text>
                    <Picker selectedValue={this.state.status}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({status: itemValue})
                            } mode="dialog">
                        <Picker.Item label='Selectionner un etat' value=''/>
                        <Picker.Item label='Louee' value='louee'/>
                        <Picker.Item label='Gerant Libre' value='Gerant Libre'/>
                        <Picker.Item label='Proprietaire' value='Proprietaire'/>
                        <Picker.Item label='Client en cours' value='Client en cours'/>
                    </Picker>
                    <Text style={profileStyleSheet.loginText}>Interet </Text>
                    <Picker selectedValue={this.state.interest}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({interest: itemValue})
                            } mode="dialog">
                        <Picker.Item label="Selectionner l'interet"/>
                        <Picker.Item label='Interesse' value='Interesse'/>
                        <Picker.Item label='A renegotier' value='A renegotier'/>
                        <Picker.Item label='A ne pas negotier' value='A ne pas renegotier'/>
                    </Picker>
                    <Text style={profileStyleSheet.loginText}>Localisation </Text>
                    <Button color={Colors.powerRed} title="Ouvrir GMaps" onPress={_ => this.handleGetDirections()}/>

                    <Text style={formClientStyleSheet.loginText}>Besoin </Text>
                    <CheckBox value={this.state.product1}
                              onChange={_ => this.setState({product1: !this.state.product1})}/>
                    <Text style={formClientStyleSheet.productFst}>Produit N1</Text>
                    <CheckBox value={this.state.product2}
                              onChange={_ => this.setState({product2: !this.state.product2})}/>
                    <Text style={formClientStyleSheet.productFst}>Produit N2</Text>
                    <CheckBox value={this.state.product3}
                              onChange={_ => this.setState({product3: !this.state.product3})}/>
                    <Text style={formClientStyleSheet.productFst}>Produit N3</Text>
                    <CheckBox value={this.state.product4}
                              onChange={_ => this.setState({product4: !this.state.product4})}/>
                    <Text style={formClientStyleSheet.productFst}>Produit N4</Text>
                    <CheckBox value={this.state.product5}
                              onChange={_ => this.setState({product5: !this.state.product5})}/>
                    <Text style={formClientStyleSheet.productFst}>Produit N5</Text>
                    <CheckBox value={this.state.product6}
                              onChange={_ => this.setState({product6: !this.state.product6})}/>
                    <Text style={formClientStyleSheet.productFst}>Produit N6</Text>
                    <TouchableOpacity style={profileStyleSheet.ButtonStyle1} onPress={_ => this.updateWithId()}>
                        <Text style={profileStyleSheet.textOnButton1}>Modifer</Text>
                    </TouchableOpacity>
            </ScrollView>
    );
    }
    }