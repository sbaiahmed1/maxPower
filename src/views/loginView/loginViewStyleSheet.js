import {StyleSheet} from 'react-native';
import {GlobalSheet, Colors} from '../../config';

const loginViewStyleSheet = StyleSheet.create({
    mdpText: {
        fontSize: 7 * GlobalSheet.units.vw,
        color: 'black',
        fontFamily: 'Action_Man',
        marginTop: 5 * GlobalSheet.units.vw,
        marginBottom: 3 * GlobalSheet.units.vw,
        left: '27%'
    },
    loginText: {
        fontSize: 7 * GlobalSheet.units.vw,
        color: 'black',
        fontFamily: 'Action_Man',
        marginBottom: 3 * GlobalSheet.units.vw,
        marginTop: 5 * GlobalSheet.units.vw,
        left: '30%'
    },
    InputText: {
        height: 15 * GlobalSheet.units.vw,
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
        width: '50%',
        left: '25%',
        marginTop: 5 * GlobalSheet.units.vw
    },
    textOnButton: {
        fontSize: 7 * GlobalSheet.units.vw,
        color: 'white',
        fontFamily: 'Action_Man',
        marginBottom: 5 * GlobalSheet.units.vw,
        marginTop: 5 * GlobalSheet.units.vw,
        left: 2 * GlobalSheet.units.vw

    }
});
export default loginViewStyleSheet;