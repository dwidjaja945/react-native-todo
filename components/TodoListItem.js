import React from 'react';
import { View, FlatList, Button, Text, StyleSheet } from 'react-native';
import styles from '../styles/app_style';

import dummyData from '../dummy_data';

export default class TodoList extends React.Component {
    
    render() {
        debugger;
        return(
            <View style={styles.item_container} >
                <View style={styles.item_detail_header} >
                    <Text style={styles.item_detail_header_text}>Item Details</Text>
                </View>
                <View>
                    <Text style={styles.item}>{this.props.navigation.state.params.item_details}</Text>
                </View>

                <Button title="Completed" type='text' />

            </View>
        );
    }
}