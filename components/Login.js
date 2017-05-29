/*
* David Kviloria
*/

import axios from 'axios';
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image,
  StatusBar,
  Navigator,
  TextInput,
  TouchableHighlight,
  KeyboardAvoidingView,
  AsyncStorage
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
// import moment from 'moment'
import styles from './Style'


export default class Login extends Component{

  constructor(props){
    super(props);
    this.state = {msgStatus: false, user: [], loginUser: [], showLoginForm: true, lastUserText: false}
  }

  /*
  * აპლიკაციის ხელახლა ჩატვირთვის შემთხევაში
  * ჩაიტვირთოს ბოლოს ავტორიზებული მომხმარებლის მონაცემები
  */
  componentDidMount(){
      AsyncStorage.getItem('loginUser').then((value) => {
        if(value !== null)
          this.setState({loginUser: JSON.parse(value), showLoginForm: false, lastUserText: true});

      }).done()
  }


  message = ()=>{
    if (this.state.msgStatus){
        setTimeout(()=> {this.setState({msgStatus: !this.state.msgStatus})}, 2000)
        switch(this.state.msgType){
          case 1:
            return <View style={styles.alert}>
                <Text style={{fontSize: 20, color: 'white'}}>{this.state.message}</Text>
            </View>
          case 2:
              return <View style={[styles.success, {width: 260}]}>
                <Text style={{fontSize: 20, color: 'white'}}>{this.state.message}</Text>
            </View>
          default:
              return <View style={styles.info}>
                <Text style={{fontSize: 20, color: 'white'}}>{this.state.message}</Text>
            </View>
      }
    }
    return null
  }

  login(){
    /*
    * ფორმების ვალიდაცია
    */
    if(this.state.email && this.state.password){
      /*
      * გააგზავნე ავტორიზაციის რექვესთი
      */
      axios.post('https://dry-earth-70945.herokuapp.com/api/auth', {
          email: this.state.email,
          password: this.state.password
      })

      .then((response) => {
        /*
        * გაანახლე USER სთეითი და მიანიჭე
        * სერვერის მიერ გამოგზავნილი ობიექტი
        */
        this.setState({user: response.data.data})
        console.log(response.data)
        /*
        * შექმენი ლოკალური სთორიჯი სახელად loginUser და მიანიჭე სთეით USRE - ის მნიშვნელობა
        */
        AsyncStorage.setItem('loginUser', JSON.stringify(this.state.user))
        /*
        * გაანახლე მესიჯის ჯომპონენტი
        */
        this.setState({message: 'Welcome ' + this.state.user.name, msgStatus: true, msgType: 2, showLoginForm: false})

        /*
        * გამოიტანე მონაცემი მომხმარებლის სთორიჯიდან და განაახლე LoginState
        * რის შემდეგაც გამოიტანე ინფორმაცია ავტორიზებული მომხმარებლის შესახებ!
        */
        AsyncStorage.getItem('loginUser').then((value) => {
          if(value != null)
            this.setState({loginUser: JSON.parse(value)});
        }).done()
        /*
        * დაელოდე ერთ წამი და შემდეგ ჩატვირთე ფუნქცია რომელიც გადაამისამართებს როუტერს და გაუგზავნის PROPS სახელად user რომელსაც გაატანს loginUser სთეითის ინფორაციას
        */
        setTimeout(()=>{
          this.startUserView()
        }, 1000)
      })

      .catch((err) => {
        this.setState({message: err.message, msgStatus: true})
      })

    }else{
      this.setState({msgStatus: true, message: 'Enter Email And Password!', msgType: 1})
    }
  }

  startUserView(){
    Actions.new({user: this.state.loginUser})
  }

  lastUserText(){
    if(this.state.lastUserText)
      return <Text style={{fontSize: 20, color: '#fff', marginVertical: 10, textAlign: 'center'}}>LAST ACTIVE USER</Text>
    return null
  }

  lastLoginUser(){
    if(this.state.loginUser.length !== 0){
      return  <View>
        {this.lastUserText()}
        <View style={[styles.userCard, {flexDirection: 'row'}]}>
          <TouchableHighlight underlayColor='rgba(0,0,0,0)' onPress={()=> this.startUserView()}>
            <View style={{}}>
              <Image style={[styles.image, {borderRadius: 4}]} source={{uri: this.state.loginUser.image}} />
              <Text style={[styles.userCardTitle, {maxWidth: 190, width: 160}]}>{this.state.loginUser.name}</Text>
              {/*<Text style={[styles.userCardText, {}]}>{moment(this.state.loginUser.reg_time)}</Text>*/}
              <Text style={[styles.userCardText, {}]}>@{this.state.loginUser.nickname}</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={[styles.alert, styles.controls,{padding:1, marginHorizontal: 40, backgroundColor: 'rgba(255,255,255,0.5)'}]} underlayColor='rgba(0,0,0,0)' onPress={()=> this.setState({loginUser: '', showLoginForm: true}) || AsyncStorage.setItem('loginUser', '')}>
            <View style={{}}>
              <Text style={{textAlign: 'center', color: '#fff', fontWeight: 'bold'}}>x</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    }
    return null
  }


  loginForm(){
    if(this.state.showLoginForm){
      return <KeyboardAvoidingView behavior='padding'>
        <TextInput keyboardType='email-address' maxLength={20} ref={(val) => this._email = val} onChangeText={(_email) => this.setState({email: _email})}
                  underlineColorAndroid='rgba(0,0,0,0)' returnKeyType='next'
                  onSubmitEditing={()=> this._pass.focus()}
                  style={styles.input} placeholder='Email' placeholderTextColor='#bdc3c7' />

        <TextInput secureTextEntry={true} password={true} keyboardType='email-address' password={true} ref={(val) => this._pass = val} onChangeText={(_pass) => this.setState({password: _pass})}
                  maxLength={20} underlineColorAndroid='rgba(0,0,0,0)'
                  onSubmitEditing={()=> this._pass.focus()}
                  returnKeyType='go' style={styles.input} placeholder='Password' placeholderTextColor='#bdc3c7' />

          <TouchableHighlight onPress={() => this.login()} underlayColor='rgba(0,0,0,0)'>
            <Text style={styles.loginButton}>login</Text>
          </TouchableHighlight>
      </KeyboardAvoidingView>
    }
    return null
  }


  render() {

    return (
      <View style={styles.container}>
            <StatusBar backgroundColor="#2c3e50" barStyle="light-content" />
            <View>{this.lastLoginUser()}</View>
            <View>{this.message()}</View>
            <View>{this.loginForm()}</View>
      </View>
    );
  }
}
