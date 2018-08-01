import React from 'react';
import { View , Text , StyleSheet } from 'react-native';

import styles from '../styles/app_style';

import TodoList from './TodoList';

export default class Home extends React.Component {
    static navigationOptions = {
        headerTitle: 'Todo List'
    };
    render() {
        return(
            <View style={styles.container}>
                <TodoList test="testing"/>
            </View>
        );
    }
}
