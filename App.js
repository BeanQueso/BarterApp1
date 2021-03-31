import React from 'react' 
import {StyleSheet, View} from 'react-native'
import SignupLoginScreen from './screens/SignUpLoginScreen'

export default class App extends React.Component{
  render(){
    return(
      <View style = {{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <SignupLoginScreen/>
      </View>
    )
  }
}