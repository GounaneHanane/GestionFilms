import React from 'react' 
import { StyleSheet, Image } from 'react-native';
import {  createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import Favorites from '../Components/Favorites'
import News from '../Components/News'
import Login from '../Components/Login'
import Map from '../Components/Map'

const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  },
  
  FilmDetail: {
    screen: FilmDetail
  },

 
})
const NewsStackNavigator = createStackNavigator({
  News: {
    screen: News,
    navigationOptions: {
      title: 'Les Derniers Films',
    },
  },
  FilmDetail: {
    screen: FilmDetail,
  }
})

 
const MoviesTabNavigator = createBottomTabNavigator(
  {
    Search: {
      screen: SearchStackNavigator,
      navigationOptions: {
        tabBarIcon: () => { 
          return <Image
            source={require('../Images/ic_search.png')}
            style={styles.icon}/> 
        }
      }
    },
    Favorites: {
      screen: Favorites,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image
            source={require('../Images/ic_favorite.png')}
            style={styles.icon}/>
        }
      }
    }
    , News: {
      screen: NewsStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image
            source={require('../Images/ic_fiber_new.png')}
            style={styles.icon}/>
        }
      }
    },
    Maps: {
      screen: Map,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image
            source={require('../Images/ic_maps.png')}
            style={styles.icon}/>
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeBackgroundColor: '#DDDDDD', 
      inactiveBackgroundColor: '#FFFFFF', 
      showLabel: false, 
      showIcon: true 
    }
  }
)
const LoginStackNavigator = createStackNavigator({
  Login: {
    screen: Login
  },
  Home: { 
    screen : MoviesTabNavigator 
  }
}, 
{
   headerMode: 'none',
   defaultNavigationOptions: {
   gesturesEnabled: false
}}
)

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})

export default createAppContainer(LoginStackNavigator)