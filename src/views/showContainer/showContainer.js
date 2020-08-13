import React,{Component} from 'react'
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import {Show} from '../show'
import {Profile} from '../profile'

const SwitchShow = createSwitchNavigator ({
    show : {screen: Show,},
    profile :{screen: Profile}
});
const ShowAppContainer = createAppContainer(SwitchShow)
export default class ShowContainer extends Component{
    render() {
        return <ShowAppContainer/>
    }

}