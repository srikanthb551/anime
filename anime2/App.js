/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image
} from 'react-native';

import {createAppContainer,configureLogs} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import 'react-native-gesture-handler';
import Slider from './Screen/Slider';
import Screen1 from './Screen/Screen1'
import Screen2 from './Screen/Screen2'
import Screen3 from './Screen/Screen3'
import Icon from 'react-native-vector-icons/FontAwesome';


class NavigationDrawerStructure extends Component {

  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
    process.env.REACT_NAV_LOGGING = true
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
         hitSlop={{
          top: 20,
          bottom: 20,
          left: 50,
          right: 50
      }}
        style={{marginLeft:10,marginTop:5}} onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
         {/* <Text>hi</Text> */}
         <Icon type="FontAwesome" name="bars" style={{color:"white",fontSize:20,}}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  Screen1: {
    screen: Screen3,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen1',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      // headerStyle: {
      //   backgroundColor: '#FF9800',
      // },
      headerBackground: (
        <Image
          style={[StyleSheet.absoluteFill,{height:60}]}
          source={require("./assets/bs.jpg")}
        />
      ),
      headerTintColor: '#fff',
    }),
  },
  Screen2: {
    screen: Screen2,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen2',
      // headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});


const FirstActivity_StackNavigator1 = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  Screen1: {
    screen: Screen1,
    navigationOptions: ({ navigation }) => ({
      title: '',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      // headerStyle: {
      //   backgroundColor: '#FF9800',
      // },
      headerBackground: (
        <Image
          style={[StyleSheet.absoluteFill,{height:60}]}
          source={require("./assets/bs.jpg")}
          // source={{ uri: 'https://s3.envato.com/files/218833823/Social%20BG_02_HD_590P.jpg' }}
        />
      ),
      headerTintColor: '#fff',
    }),
  },
  Screen2: {
    screen: Screen2,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen2',
      // headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  FirstActivity_StackNavigator1 : {
    //Title
    screen: FirstActivity_StackNavigator1 ,
    navigationOptions: {
      drawerLabel: 'Social',
      drawerIcon:({tintColor})=><Icon type="FontAwesome" name="bars" style={{color:"black",fontSize:20,}}/>
    },
  },
  FirstActivity_StackNavigator : {
    //Title
    screen: FirstActivity_StackNavigator ,
    navigationOptions: {
      drawerLabel: 'Entertainment',
      drawerIcon:({tintColor})=><Icon type="FontAwesome" name="bars" style={{color:"black",fontSize:20,}}/>
    },
  },
  FirstActivity_StackNavigator2 : {
    //Title
    screen: FirstActivity_StackNavigator ,
    navigationOptions: {
      drawerLabel: 'Entertainment',
      drawerIcon:({tintColor})=><Icon type="FontAwesome" name="bars" style={{color:"black",fontSize:20,}}/>
    },
  },
  FirstActivity_StackNavigator3 : {
    //Title
    screen: FirstActivity_StackNavigator ,
    navigationOptions: {
      drawerLabel: 'Entertainment',
      drawerIcon:({tintColor})=><Icon type="FontAwesome" name="bars" style={{color:"black",fontSize:20,}}/>
    },
  },
  FirstActivity_StackNavigator4 : {
    //Title
    screen: FirstActivity_StackNavigator ,
    navigationOptions: {
      drawerLabel: 'Entertainment',
      drawerIcon:({tintColor})=><Icon type="FontAwesome" name="bars" style={{color:"black",fontSize:20,}}/>
    },
  },
  FirstActivity_StackNavigator5 : {
    //Title
    screen: FirstActivity_StackNavigator ,
    navigationOptions: {
      drawerLabel: 'Entertainment',
      drawerIcon:({tintColor})=><Icon type="FontAwesome" name="bars" style={{color:"black",fontSize:20,}}/>
    },
  },


  // Screen2: {
  //   //Title
  //   screen: Screen2,
  //   navigationOptions: {
  //     drawerLabel: 'Demo Screen2',
  //     drawerIcon:({tintColor})=><Icon type="FontAwesome" name="bars" style={{color:"black",fontSize:20,}}/>
  //   },
  // },
  // Screen3: {
  //   //Title
  //   screen: Screen3,
  //   navigationOptions: {
  //     drawerLabel: 'Demo Screen2',
  //     drawerIcon:({tintColor})=><Icon type="FontAwesome" name="bars" style={{color:"black",fontSize:20,}}/>
  //   },
  // },
  // Screen1:Screen1,
  // Screen2:Screen2
  },
  {
      contentComponent:props=> <Slider {...props}/>,
      contentOptions:{
        activeBackgroundColor:"#FF9800"
      }
  }
  );
 
export default createAppContainer(DrawerNavigatorExample);