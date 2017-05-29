import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image,
  Button,
  ScrollView
} from 'react-native';


import {Actions} from 'react-native-router-flux';

import styles from './Style'

export default class New extends Component {
  
  render() {
    return (
      <View style={[styles.container_2, {margin: 0}]}>
            <View style={{flexDirection: 'row'}}>
                <View style={[styles.userCard, {flex: 1, backgroundColor: '#34495e'}]}>
                  <Image style={[styles.image, { borderRadius: 0, }]} source={{uri: this.props.user.image}} />
                  <Text style={[styles.userCardTitle, {}]}>{this.props.user.name}</Text>
                  <Text style={[styles.userCardText, {textShadowColor: '#555', textShadowOffset: {width:-1, height:-1}}]}>Follower: {this.props.user.folowers} | Followed: {this.props.user.folowed}</Text>
                </View>
            </View>
            <View style={{flex: 1, backgroundColor: '#fff', marginVertical: -10}}>
              <Image style={{flex: 1}} source={{uri: this.props.user.image}}>
                    <Button title="log Out" color="#841584" onPress={()=> Actions.pop()}/> 
                    <ScrollView style={{overflow: 'hidden', backgroundColor: 'rgba(255,255,255,0.5)', padding: 5}}>
                      
                      <View style={[styles.userCard, {flexDirection: 'column', width: 340,backgroundColor: '#555', marginVertical: 2}]}>
                        <Image style={styles.image} source={{uri: this.props.user.image}} />    
                        <Text style={styles.userCardTitle}>Name: {this.props.user.name}</Text>
                        <Text style={styles.userCardText}>Email: {this.props.user.email} </Text>
                      </View>
                    </ScrollView>
              </Image>
            </View>                
      </View>
    );
  }
}
