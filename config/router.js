import React from 'react';
import {Platform} from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons'; 

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import NewContact from '../screens/NewContact';
import Me from '../screens/Me'

import { capitalizeFirstLetter } from '../helpers/string';
import { DrawerButton } from '../components/Header';


const LeftDrawerButton = ({navigation}) => {
  if(Platform.OS === 'android') {
    return <DrawerButton onPress={()=> navigation.openDrawer()} />
  }

  return null;
} 

export const ContactsStack = createStackNavigator({
  Contacts: {
    screen: Contacts,
    navigationOptions: (props) => ({
      title: 'Contacts',
      headerLeft: <LeftDrawerButton {...props} />,
    }),
  },
  Details: {
    screen: Details,
    navigationOptions: ({ navigation }) => ({
      title: `${capitalizeFirstLetter(navigation.state.params.name.first)} ${capitalizeFirstLetter(navigation.state.params.name.last)}`,
    }),
  },
});

export const NewContactStack = createStackNavigator({
   NewContact: {
    screen: NewContact, 
    navigationOptions: (props) => ({
      title: 'New Contact',
      headerLeft: <LeftDrawerButton {...props} />,
    }),
  },
});

export const MeStack = createStackNavigator({
   Me: {
    screen: Me,
     navigationOptions: (props) => ({
      title: 'Me',
      headerLeft: <LeftDrawerButton {...props} />,
    }),
   },
});

export const Tabs = createBottomTabNavigator({
  Contacts: {
    screen: ContactsStack,
    navigationOptions: {
      tabBarLabel: 'Contacts',
      tabBarIcon: ({tintColor}) => <Ionicons name="ios-list" size={35} color={tintColor}/>
    }
  },
  NewContact:{
    screen: NewContactStack,
    navigationOptions: {
      tabBarLabel: 'New Contact',
      tabBarIcon: ({tintColor}) => <Ionicons name="ios-add" size={35} color={tintColor}/>
    }
  },
  Me:{
    screen: MeStack,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({tintColor}) => <Ionicons name="ios-contact" size={35} color={tintColor}/>
    }
  },
});


export const Drawer = createDrawerNavigator({
  Contacts: {
    screen: ContactsStack,
    navigationOptions:{
      drawerLabel: 'Contacts'
    }
  },
  NewContact: {
    screen: NewContactStack,
    navigationOptions:{
      drawerLabel: 'New Contact'
    },
  },
  Me: {
    screen: MeStack,
    navigationOptions:{
      drawerLabel: 'Me'
    }
  },
})
















