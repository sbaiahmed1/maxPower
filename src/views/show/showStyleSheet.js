import {StyleSheet} from 'react-native'
import {GlobalSheet,Colors} from '../../config'

const showStyleSheet = StyleSheet.create({
    flatListItem:{
        elevation: 5,
        shadowOpacity: 0.8,
        backgroundColor: Colors.powerRed,
        width: '100%'
    },
    textOnTouchableNP:{
        color: 'white',
        fontSize: 4.5 * GlobalSheet.units.vw,
        marginTop: 5 * GlobalSheet.units.vw,
        left : 5*GlobalSheet.units.vw,
        fontFamily: 'Action_Man',

    },textOnTouchableNR:{
        color: 'white',
        fontSize: 4.5 * GlobalSheet.units.vw,
        marginBottom: 5 * GlobalSheet.units.vw,
        left : 5*GlobalSheet.units.vw,
        fontFamily: 'Action_Man',

    },
    seperator :{
        height: 2*GlobalSheet.units.vw,
        width: "100%",
        backgroundColor: "#fff",
    }
});

export default showStyleSheet;