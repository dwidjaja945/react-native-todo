import React from 'react';
import { View , FlatList , Button , Text , StyleSheet } from 'react-native';
import styles from '../styles/app_style';

import dummyData from '../dummy_data';

export default class TodoList extends React.Component {

    getStudentList() {

        const todoList = dummyData.map((item, itemIndex) => {
            return (
                <View key={itemIndex}>
                    <Text>{item.item_name}</Text>
                    <Text>{item.item_details}</Text>
                </View>
            )
        })

    };

    render() {

        const todoList = dummyData.map((item, itemIndex) => {
            return (
                <View key={itemIndex}>
                    <Text>{item.item_name}</Text>
                    <Text>{item.item_details}</Text>
                </View>
            )
        })

        return(
            <View>
                {todoList}
            </View>
        );
    }
}