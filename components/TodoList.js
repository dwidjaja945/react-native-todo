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
        // const { navigate } = this.props.navigation;

        const todoList = dummyData.map((item, itemIndex) => {
            return (
                <View key={itemIndex}>
                    <Text onPress={() => {console.log("item clicked" , this.props)}} >{item.item_name}</Text>
                </View>
            )
        })

        return(
            <View style={styles.list_body}>
                {todoList}
            </View>
        );
    }
}