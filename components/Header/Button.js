import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native'

const Butoon = ({onPress,children}) =>{
    return(
        <TouchableOpacity onPress={onPress} style={style.ButoonStyle}>
            <Text style={style.textStyle}>{children}</Text>
        </TouchableOpacity>
    )
}

const style= StyleSheet.create({
   textStyle:{
       alignSelf:'center',
       color:'#007aff',
       fontSize:16,
       fontWeight:'600'
   }, 
   ButoonStyle:{
       alignSelf:'stretch',
       flex:1,
       borderRadius:5,
       borderWidth:1,
       borderColor:'#007aff',
       marginRight:5,
       marginLeft:5,
       paddingTop:10,
       marginTop:10
   }
})

export default Butoon

