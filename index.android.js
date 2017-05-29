import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
} from 'react-native';

import {Router, Scene} from 'react-native-router-flux';
import styles from './components/Style';
import Login from './components/Login';
import New from './components/New';


export default class TwoView extends Component {
  render() {
    return (
      <Router>
        <Scene key='root'             
               titleStyle={{fontWeight: '100', fontSize: 30, color: '#FFF'}}
               navigationBarStyle={styles.navBar}>

          <Scene key='login'
            hideNavBar={true}
            component={Login}
            title='Login' initial/>

          <Scene key='new'
                 component={New}
                 title='News'/>

        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('TwoView', () => TwoView);
