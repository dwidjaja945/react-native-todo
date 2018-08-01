import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { createStackNavigator } from 'react-navigation';
import styles from './styles/app_style';

import HomeScreen from './components/Home';
import TodoListItem from './components/TodoListItem';

const App = createStackNavigator(
	{
		Home: HomeScreen,
		TodoListItem: TodoListItem
	},
	{
		initialRouteName: 'Home',
	}
);

export default App

// const RootStack = createStackNavigator(
//     {
// 		  Home: HomeScreen,
// 		  ListItem : ListItemScreen
//     },
//     {
//         initialRouteName: 'Home',
//     }
// );

// export default class App extends React.Component {
// 	render() {
// 		return (
// 			<RootStack />
// 		);
// 	}
// }
