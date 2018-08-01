import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { createStackNavigator } from 'react-navigation';
import styles from './styles/app_style';

import HomeScreen from './components/Home';
import ListItemScreen from './components/TodoList';


// const RootStack = createStackNavigator(
//     {
// 		  Home: HomeScreen,
// 		  ListItem : ListItemScreen
//     },
//     {
//         initialRouteName: 'Home',
//     }
// );

const App = createStackNavigator(
	{
		Home: HomeScreen,
		ListItem: ListItemScreen
	},
	{
		initialRouteName: 'Home',
	}
);

export default App

// export default class App extends React.Component {
// 	render() {
// 		return (
// 			<RootStack />
// 		);
// 	}
// }
