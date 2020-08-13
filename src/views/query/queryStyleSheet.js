import {StyleSheet} from 'react-native';
import {Colors,GlobalSheet} from '../../config'

const queryStyleSheet = StyleSheet.create({
    textStyling :{
        fontSize: 5.5 * GlobalSheet.units.vw,
        color: 'black',
        fontFamily: 'Action_Man',
        marginBottom: 3 * GlobalSheet.units.vw,
        marginTop: 25 * GlobalSheet.units.vw,
        left: '2.5%'
    },
    ButtonStyle: {
        backgroundColor: Colors.powerRed,
        borderRadius: 10 * GlobalSheet.units.vw,
        width: '50%',
        left: '25%',
        marginTop:20*GlobalSheet.units.vw,
        marginBottom:5*GlobalSheet.units.vw
    },
    textOnButton: {
        fontSize: 5.5 * GlobalSheet.units.vw,
        color: 'white',
        fontFamily: 'Action_Man',
        marginBottom: 5 * GlobalSheet.units.vw,
        marginTop: 5 * GlobalSheet.units.vw,
        left : 15*GlobalSheet.units.vw

    }
});
export default queryStyleSheet;