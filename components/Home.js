import React from 'react';
import { View , Text , StyleSheet } from 'react-native';

import dummyData from "../dummy_data";

import styles from '../styles/app_style';



export default class Home extends React.Component {
    static navigationOptions = {
        title: "Home",
        headerTitle: 'Todo List'
    };

    constructor(props){
        super(props);
        console.log("home screen props: " ,this.props);
    }
    render() {

        const { navigate } = this.props.navigation;

        const todoList = dummyData.map((item, itemIndex) => {
            return (
                <View style={styles.list_item} key={itemIndex}>
                    <Text style={styles.item} onPress={() => navigate("TodoListItem" , { item_detail: item.item_details })} >{item.item_name}</Text>
                </View>
            )
        });

        return(
            <View style={styles.container}>
                <View style={styles.list_body}>
                    {todoList}
                </View>
            </View>
        );
    }
}
