import React, {Component} from 'react';
import {LoginView,TabContainer} from "./src/views";
import {createSwitchNavigator,createAppContainer} from  'react-navigation'

const AppStackNavigator = createSwitchNavigator({
    login :{
        screen : LoginView
    },
    tabContainer:{
        screen :TabContainer
    }
});
const AppStackContainer = createAppContainer(AppStackNavigator);
type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <AppStackContainer/>
        );
    }
}
