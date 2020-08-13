import React, {Component} from 'react';
import {Text, ScrollView, TextInput, TouchableOpacity, CheckBox, Picker, Button, View, Image} from 'react-native';
import formClientStyleSheet from './formClientStyleSheet';
import {GlobalSheet, Colors} from "../../config";
import Geolocation from 'react-native-geolocation-service';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob'

const options = {
    title: 'Selectionner une photo',
    takePhotoButtonTitle: 'Prendre une photo',
    chooseFromLibraryButtonTitle: 'Gallerie',
    quality: 1
};

export default class FormClient extends Component {
    static navigationOptions = {
        title: 'Ajouter'
    };
    findCoordinates = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                })
            },
            (error) => {
                // See error code charts below.
                console.log(error.code, error.message);
            },
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000}
        );
    };

    saveData = () => {
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
            fetch('https://maxpoweradmin.000webhostapp.com/api/inscription.php',
                {
                    method: 'POST',
                    headers:
                        {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                    body: JSON.stringify(
                        {
                            name: this.state.name,

                            place: this.state.place,

                            phone: this.state.phone,

                            phone2: this.state.phone2,

                            longitude: this.state.longitude,

                            latitude: this.state.latitude,

                            projectName: this.state.projectName,

                            product1: this.state.product1,

                            product2: this.state.product2,

                            product3: this.state.product3,

                            product4: this.state.product4,

                            product5: this.state.product5,

                            product6: this.state.product6,

                            responsableName: this.state.responsableName,

                            status: this.state.status,

                            interest: this.state.interest,

                            ImageFront: this.state.ImageFront,

                            ImageRue: this.state.ImageRue,

                            ImageInt: this.state.ImageInt,

                            municipalite: this.state.municipalite


                        })

                }).then((response) => response.json()).then((responseJson) => {
                alert(responseJson);
            }).catch((error) => {
                console.error(error);
            });
        }
    };
    reset = () => {
        this.nameRef.clear();
        this.NomProjetRef.clear();
        this.phoneRef.clear();
        this.phone2Ref.clear();
        this.NomResponsableRef.clear();
        this.municipaliteRef.clear();

        alert('done')
    };
    uploadPicFront = () => {
        // alert('ddf');
        RNFetchBlob.fetch('POST', 'https://maxpoweradmin.000webhostapp.com/api/uploadFront.php', {
            Authorization: "Bearer access-token",
            otherHeader: "foo",
            'Content-Type': 'multipart/form-data',
        }, [
            // element with property `filename` will be transformed into `file` in form data
            {name: 'image', filename: this.state.ImageFront, data: this.state.ImageFrontData}
        ]).then((resp) => {
            console.log(resp);
            alert(resp.data);
        })
    }

    uploadPicRue = () => {
        // alert('ddf');
        RNFetchBlob.fetch('POST', 'https://maxpoweradmin.000webhostapp.com/api/uploadRue.php', {
            Authorization: "Bearer access-token",
            otherHeader: "foo",
            'Content-Type': 'multipart/form-data',
        }, [
            // element with property `filename` will be transformed into `file` in form data
            {name: 'image', filename: this.state.ImageRue, data: this.state.ImageRueData}
        ]).then((resp) => {
            console.log(resp);
            alert(resp.data);
        })
    }

    uploadPicInt = () => {
        // alert('ddf');
        RNFetchBlob.fetch('POST', 'https://maxpoweradmin.000webhostapp.com/api/uploadInt.php', {
            Authorization: "Bearer access-token",
            otherHeader: "foo",
            'Content-Type': 'multipart/form-data',
        }, [
            // element with property `filename` will be transformed into `file` in form data
            {name: 'image', filename: this.state.ImageInt, data: this.state.ImageIntData}
        ]).then((resp) => {
            console.log(resp);
            alert(resp.data);
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            place: '',
            name: '',
            phone: '',
            phone2: '',
            longitude: null,
            latitude: null,
            product1: false,
            product2: false,
            product3: false,
            product4: false,
            product5: false,
            product6: false,
            projectName: '',
            responsableName: '',
            status: null,
            interest: null,
            ImageSourceFront: null,
            ImageSourceInt: null,
            ImageSourceRue: null,
            ImageDataFront: null,
            ImageFront: '',
            ImageRue: '',
            ImageRueFront: null,
            ImageInt: '',
            ImageIntData: null,
            municipalite:''

        }
    }

    selectImageFront() {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else {
                let source = {uri: response.uri};
                this.setState({
                    ImageSourceFront: source,
                    ImageFrontData: response.data,
                    ImageFront: response.fileName

                });
                this.uploadPicFront();

            }
        });
    }

    selectImageRue() {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else {
                let source = {uri: response.uri};
                this.setState({
                    ImageSourceRue: source,
                    ImageRueData: response.data,
                    ImageRue: response.fileName

                });
                this.uploadPicRue();
            }
        });
    }

    selectImageInt() {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else {
                let source = {uri: response.uri};
                this.setState({
                    ImageSourceInt: source,
                    ImageIntData: response.data,
                    ImageInt: response.fileName

                });
                this.uploadPicInt()

            }
        });
    }

    //Products test values
    render() {
        return (
            <ScrollView style={{backgroundColor: '#f2f2f2ff'}}>
                <Text
                    style={formClientStyleSheet.loginText}>Ville </Text>
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
                <Text style={formClientStyleSheet.loginText}>Municipalite</Text>
                <TextInput
                    ref={ref => this.municipaliteRef = ref}
                    style={formClientStyleSheet.InputText}
                    onChangeText={TextInputValue => this.setState({municipalite: TextInputValue})}
                    placeholder='Donner le nom de la municipalite'/>
                <Button color={Colors.powerRed} title="Localisation" onPress={this.findCoordinates}/>
                <Text>Localisation : {this.state.longitude} et {this.state.latitude}</Text>
                <Text style={formClientStyleSheet.loginText}>Nom du projet</Text>
                <TextInput
                    ref={ref => this.NomProjetRef = ref}
                    style={formClientStyleSheet.InputText}
                    onChangeText={TextInputValue => this.setState({projectName: TextInputValue})}
                    placeholder='Donner le nom du projet'/>
                <Text style={formClientStyleSheet.loginText}>Nom du responsable </Text>
                <TextInput
                    ref={ref => this.NomResponsableRef = ref}
                    style={formClientStyleSheet.InputText}
                    onChangeText={TextInputValue => this.setState({responsableName: TextInputValue})}
                    placeholder='Donner le nom du responsable'/>
                <Text style={formClientStyleSheet.loginText}>Prenom </Text>
                <TextInput
                    ref={ref => this.nameRef = ref}
                    style={formClientStyleSheet.InputText}
                    onChangeText={TextInputValue => this.setState({name: TextInputValue})}
                    placeholder='Donner le nom'/>
                <Text style={formClientStyleSheet.loginText}>Telephone</Text>
                <TextInput
                    ref={ref => this.phoneRef = ref}
                    style={formClientStyleSheet.InputText}
                    onChangeText={TextInputValue => this.setState({phone: TextInputValue})}
                    placeholder='Donner le numero du telephone'/>
                <Text style={formClientStyleSheet.loginText}>Telephone 2</Text>
                <TextInput
                    ref={ref => this.phone2Ref = ref}
                    style={formClientStyleSheet.InputText}
                    onChangeText={TextInputValue => this.setState({phone2: TextInputValue})}
                    placeholder='Donner le telephone alternatif'/>
                <Text style={formClientStyleSheet.loginText}>Status</Text>
                <Picker selectedValue={this.state.status}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({status: itemValue})
                        } mode="dialog">
                    <Picker.Item label='Selectionner un etat' value=''/>
                    <Picker.Item label='Louee' value='louee'/>
                    <Picker.Item label='Gerant Libre' value='Gerant Libre'/>
                    <Picker.Item label='Proprietaire' value='Proprietaire'/>
                </Picker>
                <Text style={formClientStyleSheet.loginText}>Interet</Text>
                <Picker selectedValue={this.state.interest}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({interest: itemValue})
                        } mode="dialog">
                    <Picker.Item label="Selectionner l'interet"/>
                    <Picker.Item label='Interesse' value='Interesse'/>
                    <Picker.Item label='A renegotier' value='A renegotier'/>
                    <Picker.Item label='A ne pas negotier' value='A ne pas renegotier'/>
                </Picker>
                <Text style={formClientStyleSheet.loginText}>Besoin </Text>
                <CheckBox value={this.state.product1} onChange={_ => this.setState({product1: !this.state.product1})}/>
                <Text style={formClientStyleSheet.productFst}>Produit N1</Text>
                <CheckBox value={this.state.product2} onChange={_ => this.setState({product2: !this.state.product2})}/>
                <Text style={formClientStyleSheet.productFst}>Produit N2</Text>
                <CheckBox value={this.state.product3} onChange={_ => this.setState({product3: !this.state.product3})}/>
                <Text style={formClientStyleSheet.productFst}>Produit N3</Text>
                <CheckBox value={this.state.product4} onChange={_ => this.setState({product4: !this.state.product4})}/>
                <Text style={formClientStyleSheet.productFst}>Produit N4</Text>
                <CheckBox value={this.state.product5} onChange={_ => this.setState({product5: !this.state.product5})}/>
                <Text style={formClientStyleSheet.productFst}>Produit N5</Text>
                <CheckBox value={this.state.product6} onChange={_ => this.setState({product6: !this.state.product6})}/>
                <Text style={formClientStyleSheet.productFst}>Produit N6</Text>
                <Text style={formClientStyleSheet.loginText}>Image frontale du local</Text>
                <View>
                    <Image source={this.state.ImageSource}
                           style={{
                               borderColor: 'red',
                               width: 100 * GlobalSheet.units.vw,
                               height: 70 * GlobalSheet.units.vw,
                               alignSelf: 'center'
                           }}/>
                </View>
                <TouchableOpacity style={formClientStyleSheet.ButtonStyle} onPress={_ => this.selectImageFront()}>
                    <Text style={{
                        textAlign: 'center', fontFamily: 'Action_Man', marginTop: 5 * GlobalSheet.units.vw,
                        color: 'white', marginBottom: 5 * GlobalSheet.units.vw, fontSize: 5.5 * GlobalSheet.units.vw,
                    }}>Selectionner image</Text>
                </TouchableOpacity>
                <Text style={formClientStyleSheet.loginText}>Image de l'avenue</Text>
                <View>
                    <Image source={this.state.ImageSourceRue}
                           style={{
                               borderColor: 'red',
                               width: 100 * GlobalSheet.units.vw,
                               height: 70 * GlobalSheet.units.vw,
                               alignSelf: 'center'
                           }}/>
                </View>
                <TouchableOpacity style={formClientStyleSheet.ButtonStyle} onPress={_ => this.selectImageRue()}>
                    <Text style={{
                        textAlign: 'center', fontFamily: 'Action_Man', marginTop: 5 * GlobalSheet.units.vw,
                        color: 'white', marginBottom: 5 * GlobalSheet.units.vw, fontSize: 5.5 * GlobalSheet.units.vw,
                    }}>Selectionner image</Text>
                </TouchableOpacity>
                <Text style={formClientStyleSheet.loginText}>Image de l'interrieur du local</Text>
                <View>
                    <Image source={this.state.ImageSourceInt}
                           style={{
                               borderColor: 'red',
                               width: 100 * GlobalSheet.units.vw,
                               height: 70 * GlobalSheet.units.vw,
                               alignSelf: 'center'
                           }}/>
                </View>
                <TouchableOpacity style={formClientStyleSheet.ButtonStyle}
                                  onPress={_ => this.selectImageInt()}>
                    <Text style={{
                        textAlign: 'center', fontFamily: 'Action_Man', marginTop: 5 * GlobalSheet.units.vw,
                        color: 'white', marginBottom: 5 * GlobalSheet.units.vw, fontSize: 5.5 * GlobalSheet.units.vw,
                    }}>Selectionner image</Text>
                </TouchableOpacity>
                <TouchableOpacity style={formClientStyleSheet.ButtonStyle}>
                    <Text style={formClientStyleSheet.textOnButton} onPress={_ => {
                        return this.saveData()
                    }}>Valider</Text>
                </TouchableOpacity>
                <TouchableOpacity style={formClientStyleSheet.ButtonStyle1}>
                    <Text style={formClientStyleSheet.textOnButton1} onPress={_ => this.reset()}>Vider</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}
