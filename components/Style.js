import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },

  container_2:{
    flex: 1,
    backgroundColor: '#2c3e50'
  },
  alert: {
    alignItems: 'center',    
    padding: 10,
    width: 250,
    backgroundColor: '#e74c3c'
  },

  success: {
    alignItems: 'center',    
    padding: 10,
    width: 250,
    backgroundColor: '#2ecc71'
  },

  info: {
    alignItems: 'center',    
    padding: 10,
    marginVertical: 5,
    width: 250,
    backgroundColor: '#f39c12'
  },

  default: {
    alignItems: 'center',    
    padding: 10,
    marginVertical: 5,
    width: 250,
    backgroundColor: '#7f8c8d'
  },

  button: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    padding: 15,
    borderRadius: 5,
    borderColor: '#555',
    color: 'white',
    backgroundColor: 'red'
  },
  navBar: {
      backgroundColor: '#2c3e50',
      borderColor: '#2c3e50'
  },
  input: {
      width: 250,
      borderRadius: 5,
      margin: 10,
      color: '#fff',
      backgroundColor: 'rgba(255,255,255,0.1)',
      fontSize: 20,
      paddingHorizontal: 20,
      height: 45
  },
 loginButton: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    padding: 15,
    width:250,
    borderRadius: 5,
    borderColor: '#555',
    color: 'white',
    backgroundColor: '#7f8c8d'
  },
  userCard: {
    width:260,
    alignItems: "stretch",
    marginBottom: 10,
    padding: 5,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 3
  },
  userCardTitle: {
    position: "relative",
    height: 50,
    marginTop: -50,
    marginLeft: 54,
    textAlign: 'left',
    fontSize: 17,
    color: '#ecf0f1'
  },
  image: {
    height: 50,
    width: 50
  },
  controls: {
    height: 20,
    width: 20,
    backgroundColor: '#e74c3c',
    borderRadius: 3
  },
  controls_success: {
    height: 20,
    width: 20,
    backgroundColor: '#2ecc71',
    borderRadius: 3
  },
  userCardText: {
    position: "relative",
    fontSize: 10,
    marginLeft: 55,
    marginTop: -25,
    textAlign: 'left',
    margin: 10,
    color: '#bdc3c7'
  },

});

export default styles;