import React, {Component} from 'react'
import {ScrollView, Text, View, FlatList, TouchableOpacity} from 'react-native'
import Colors from "../../config/colors";
import showStyleSheet from './showStyleSheet'
import ViewAll from "../viewAll/viewAll";

export default class Show extends Component {
    static navigationOptions = {
        headerTitle: 'Resultat',
        headerTitleStyle: {color: Colors.powerRed}

    };
    jsonData = this.props.navigation.state.params.jsonData;
    FlatListItemSeparator = () => {
        return (
            <View
                style={showStyleSheet.seperator}
            />
        );
    }
    gettingItem(id) {
        fetch('https://maxpoweradmin.000webhostapp.com/api/ville1.php',
            {
                method: 'POST',
                headers:
                    {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                body: JSON.stringify(
                    {
                        id: id,
                    })

            })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson==='No Results Found.' || responseJson==='Empty query'){
                    alert('Aucun resultat trouve')
                }
                else {
                    this.setState({
                        jsonDataProfile: responseJson
                    });
                    this.props.navigation.navigate('profile', {jsonDataProfile: this.state.jsonDataProfile})}
            })
            .catch((error) => {
                console.error(error);
            })
    }

    constructor(props) {
        super(props);
        this.state = {
            jsonDataProfile :'',
        }
    }

    render() {
        return (
            <ScrollView style={{backgroundColor:'#f2f2f2ff'}}>
                <FlatList ItemSeparatorComponent={this.FlatListItemSeparator} renderItem={({item}) => <TouchableOpacity style={showStyleSheet.flatListItem} onPress={_=>this.gettingItem(item.id)}>
                    <Text style={showStyleSheet.textOnTouchableNP}>Nom du projet : {item.projectName}</Text>
                    <Text style={showStyleSheet.textOnTouchableNR}>Nom du responsable : {item.responsableName}</Text>
                </TouchableOpacity>} data={this.jsonData}
                          keyExtractor={(item, id) => item.id}/>
            </ScrollView>
        )
    }
}