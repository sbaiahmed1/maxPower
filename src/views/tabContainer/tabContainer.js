import React,{Component } from  "react";
import {createAppContainer,createBottomTabNavigator} from "react-navigation";
import {FormClient} from '../../views';
import {ViewAll} from '../viewAll'
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../config'

const BottomTabNavigator = createBottomTabNavigator({
    addNew : {screen : FormClient},
    viewAll : {screen: ViewAll}
},
     {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'addNew') {
                    iconName = "add-circle";
                } else if (routeName === 'viewAll') {
                    iconName = "account-circle";
                }
                return <Icon name={iconName} size={35} color={tintColor}/>
            },
        }),
        tabBarOptions: {
            inactiveTintColor: 'gray',
            activeTintColor : Colors.powerRed
        }
    });
const AppTabContainer = createAppContainer(BottomTabNavigator)
export default class TabContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <AppTabContainer/>
        );
    }
}