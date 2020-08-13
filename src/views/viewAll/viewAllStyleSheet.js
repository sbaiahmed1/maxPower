import {StyleSheet} from 'react-native';
import {GlobalSheet,Colors} from '../../config';

const viewAllStyleSheet = StyleSheet.create({
    opacityStyle:{
        backgroundColor: Colors.powerRed,
        borderRadius: 10 * GlobalSheet.units.vw,
        width: '100%',
        marginTop: 5 * GlobalSheet.units.vw,
        alignContent:'center',
        justifyContent:'center'
    },
    textOnStyle:{
        fontSize: 5.5 * GlobalSheet.units.vw,
        color: 'white',
        fontFamily: 'Action_Man',
        marginBottom: 5 * GlobalSheet.units.vw,
        marginTop: 5 * GlobalSheet.units.vw,
        left : 39*GlobalSheet.units.vw
    },
    titleStyle:{
        fontSize: 10 * GlobalSheet.units.vw,
        left : '15%',
        color:'black'

    },
    textOnStyleDouble:{
        fontSize: 5.5 * GlobalSheet.units.vw,
        color: 'white',
        fontFamily: 'Action_Man',
        marginBottom: 5 * GlobalSheet.units.vw,
        marginTop: 5 * GlobalSheet.units.vw,
        left : 35*GlobalSheet.units.vw
    }
});
export default viewAllStyleSheet;