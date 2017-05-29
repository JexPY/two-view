# React Native App
<b>React Native V: 0.42.3</b><br />
<b>CLI V: 2.0.1</b> <br />
### Setup
```
npm install
```

### Run
```
1) npm start 
1) react-native run-android
```


# BUG(S)
<b>TextInput [type=password]</b> <br />
<b>DESC</b>: Content still visible as regular text input <br />
```javascript
<TextInput secureTextEntry={true} password={true} placeholder='Password' />
```
