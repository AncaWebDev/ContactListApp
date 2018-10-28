import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons'; 

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import NewContact from '../screens/NewContact';
import Me from '../screens/Me'

import { capitalizeFirstLetter } from '../helpers/string';

export const ContactsStack = createStackNavigator({
  Contacts: {
    screen: Contacts,
    navigationOptions: {
      title: 'Contacts',
    },
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
    navigationOptions: {
      headerTitle: 'New Contact',
    }
  },
});

export const MeStack = createStackNavigator({
   Me: {
    screen: Me,
     navigationOptions: {
      headerTitle: 'Me',
    }
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