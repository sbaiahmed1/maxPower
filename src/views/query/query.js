import React, {Component} from 'react'
import {Picker, ScrollView, Text, TouchableOpacity} from 'react-native'
import queryStyleSheet from "./queryStyleSheet";
import {Colors,GlobalSheet} from '../../config'
import formClientStyleSheet from "../formClient/formClientStyleSheet";

export default class Query extends Component {
    static navigationOptions = {
        headerTitle: "Choisissez une Options",
        headerTitleStyle: {color: Colors.powerRed}
    }

    constructor(props) {
        super(props);
        this.state = {
            place: null,
            interest: null,
            jsonData: ''
        }
    }

    searchData() {
        fetch('https://maxpoweradmin.000webhostapp.com/api/ville.php',
            {
                method: 'POST',
                headers:
                    {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                body: JSON.stringify(
                    {
                        place: this.state.place,

                        interest: this.state.interest
                    })

            })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        if (responseJson==='No Results Found.' || responseJson==='Empty query'){
                            alert('Aucun resultat trouve')
                        }
                        else {
                        this.setState({
                            jsonData: responseJson
                        });
                        this.props.navigation.navigate('show', {jsonData: this.state.jsonData})}
                    })
                    .catch((error) => {
                        console.error(error);
                    })
    }

    render() {
        return (
            <ScrollView style={{backgroundColor:'#f2f2f2ff'}}>
                <Text style={queryStyleSheet.textStyling}>Selectionner une ville </Text>
                <Picker
                    selectedValue={this.state.place}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({place: itemValue})
                    } mode="dialog">
                    <Picker.Item label='Selectionner une ville' value='null'/>
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
                <Text style={queryStyleSheet.textStyling}>Selectionner un interet </Text>
                <Picker selectedValue={this.state.interest}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({interest: itemValue})
                        } mode="dialog">
                    <Picker.Item label="Selectionner l'interet" value='null'/>
                    <Picker.Item label='Interesse' value='Interesse'/>
                    <Picker.Item label='A renegotier' value='A renegotier'/>
                    <Picker.Item label='A ne pas negotier' value='A ne pas renegotier'/>
                </Picker>
                <TouchableOpacity style={formClientStyleSheet.ButtonStyle}>
                    <Text style={formClientStyleSheet.textOnButton} onPress={_ => {
                        return this.searchData()
                    }}>Valider</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}