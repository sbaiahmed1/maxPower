import {StyleSheet} from 'react-native'
import {Colors,GlobalSheet} from '../../config'

const profileStyleSheet = StyleSheet.create({
    loginText: {
        fontSize: 5.5 * GlobalSheet.units.vw,
        color: 'black',
        fontFamily: 'Action_Man',
        marginBottom: 3 * GlobalSheet.units.vw,
        marginTop: 5 * GlobalSheet.units.vw,
    },
    detailsText :{
        fontSize: 4.5 * GlobalSheet.units.vw,
        marginBottom: 3 * GlobalSheet.units.vw,
        marginTop: 5 * GlobalSheet.units.vw,
    },
    ButtonStyle: {
        backgroundColor: Colors.powerRed,
        borderRadius: 10 * GlobalSheet.units.vw,
        width: '60%',
        left: '20%',
        marginTop:5*GlobalSheet.units.vw,
        marginBottom:2.5*GlobalSheet.units.vw
    },
    ButtonStyle1: {
        backgroundColor: Colors.powerRed,
        borderRadius: 10 * GlobalSheet.units.vw,
        width: '60%',
        left: '20%',
        marginBottom:5*GlobalSheet.units.vw
    },
    textOnButton: {
        fontSize: 5.5 * GlobalSheet.units.vw,
        color: 'white',
        fontFamily: 'Action_Man',
        marginBottom: 5 * GlobalSheet.units.vw,
        marginTop: 5 * GlobalSheet.units.vw,
        left : 17*GlobalSheet.units.vw

    },
    textOnButton1: {
        fontSize: 5.5 * GlobalSheet.units.vw,
        color: 'white',
        fontFamily: 'Action_Man',
        marginBottom: 5 * GlobalSheet.units.vw,
        marginTop: 5 * GlobalSheet.units.vw,
        left : 19*GlobalSheet.units.vw

    },
    InputText: {
        height: 13 * GlobalSheet.units.vw,
        backgroundColor: 'white',
        elevation: 5,
        shadowOpacity: 0.8,
    }
})
export default profileStyleSheet;