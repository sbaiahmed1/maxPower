import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import {Query} from '../query';
import {Show} from '../show'
import {Profile} from '../profile'
const QueryNavigator = createStackNavigator({
    query: {screen: Query},
    show: {screen: Show},
    profile :{screen: Profile}
});

const QueryContainer = createAppContainer(QueryNavigator);

export default class ViewAll extends Component {
    static navigationOptions = {
        title: 'Consulter'
    };
    render() {
        return <QueryContainer/>
            }
        }