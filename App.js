import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header/header'
import AlbmumList from './components/AlbumList/Albumlist'
const App = props => {
  return (
    <View>
     <Header headerText="Albums" />
     <AlbmumList/> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App