import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import AlbumDetail from './AlbumDetail'
import Card from '../Card/Card'

class Albumlist extends Component {
 state={albums:[]}   

 componentDidMount(){
     console.log('component did mount')
     fetch('https://rallycoding.herokuapp.com/api/music_albums')
     .then(response => response.json())
     .then(data => this.setState({albums:data}))
 }

 renderAlbums(){
   return this.state.albums.map(album => <AlbumDetail key={album.title} album={album}/>)
 }
    
  render() {
    console.log(this.state)  
    return (
      <Card>
        {this.renderAlbums()}
      </Card>
    );
  }
}

const styles = StyleSheet.create({});
export default Albumlist;
