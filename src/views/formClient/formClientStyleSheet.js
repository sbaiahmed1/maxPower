import {StyleSheet} from 'react-native';
import {GlobalSheet, Colors} from '../../config';

const formClientStyleSheet = StyleSheet.create({
    mdpText: {
        fontSize: 7 * GlobalSheet.units.vw,
        color: 'black',
        fontFamily: 'Action_Man',
        marginTop: 5 * GlobalSheet.units.vw,
        marginBottom: 3 * GlobalSheet.units.vw,
        left: '27%'
    },
    loginText: {
        fontSize: 5.5 * GlobalSheet.units.vw,
        color: 'black',
        fontFamily: 'Action_Man',
        marginBottom: 3 * GlobalSheet.units.vw,
        marginTop: 5 * GlobalSheet.units.vw,
        left: '2.5%'
    },
    InputText: {
        height: 13 * GlobalSheet.units.vw,
        backgroundColor: 'white',
        elevation: 5,
        shadowOpacity: 0.8,
    },
    ImageStyle: {
        height: 50 * GlobalSheet.units.vw,
        width: 50 * GlobalSheet.units.vw,
        top: 5 * GlobalSheet.units.vw,
        left: '25%',
        marginBottom: 5 * GlobalSheet.units.vw
    },
    ButtonStyle: {
        backgroundColor: Colors.powerRed,
        borderRadius: 10 * GlobalSheet.units.vw,
        width: '60%',
        left: '20%',
        marginTop: 5 * GlobalSheet.units.vw,
        marginBottom: 2.5 * GlobalSheet.units.vw
    },
    ButtonStyle1: {
        backgroundColor: Colors.powerRed,
        borderRadius: 10 * GlobalSheet.units.vw,
        width: '60%',
        left: '20%',
        marginBottom: 5 * GlobalSheet.units.vw
    },
    textOnButton: {
        fontSize: 5.5 * GlobalSheet.units.vw,
        color: 'white',
        fontFamily: 'Action_Man',
        marginBottom: 5 * GlobalSheet.units.vw,
        marginTop: 5 * GlobalSheet.units.vw,
        textAlign: 'center'
    },
    textOnButton1: {
        fontSize: 5.5 * GlobalSheet.units.vw,
        color: 'white',
        fontFamily: 'Action_Man',
        marginBottom: 5 * GlobalSheet.units.vw,
        marginTop: 5 * GlobalSheet.units.vw,
        textAlign: 'center'

    },
    pickerStyle: {
        borderRadius: 10 * GlobalSheet.units.vw,
        borderColor: Colors.powerRed,
        fontSize: 50 * GlobalSheet.units.vw
    },
    productFst: {
        marginTop: -7 * GlobalSheet.units.vw,
        left: '10%',
        fontSize: 4.5 * GlobalSheet.units.vw
    }
});
export default formClientStyleSheet;