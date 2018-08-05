import React from 'react';
import { View , Text , StyleSheet } from 'react-native';
import axios from 'axios';

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

        this.state = {
            listData : []
        }
    };

    async getListData() {
        await axios.get("http://localhost:9000/api/get_list_data").then( (results) => {
            this.setState({
                listData: results.data.data
            });
        });
    }

    componentDidMount() {
        this.getListData();
    }

    render() {
        const { navigate } = this.props.navigation;
        const { listData } = this.state;
        
        console.log(this.state.listData);
        
        
        const todoList = listData.map((item, itemIndex) => {
            debugger;
            return (
                <View style={styles.list_item} key={itemIndex}>
                    <Text style={styles.item} onPress={() => navigate("TodoListItem" , { item_details: item.item_details })} >{item.item}</Text>
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
