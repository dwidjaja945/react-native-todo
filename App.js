import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import styles from './styles/app_style';

import TodoList from './components/TodoList';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>

				<View className="header" >
					<Text style={styles.header}>Todo List</Text>
				</View>

				<TodoList />

			</View>
		);
	}
}
