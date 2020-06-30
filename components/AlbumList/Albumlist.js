import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import AlbumDetail from './AlbumDetail'
import Card from '../Card/Card'

class Albumlist extends Component {
 state={albums:[]}   
 componentDidMount(){
     fetch('https://rallycoding.herokuapp.com/api/music_albums')
     .then(response => response.json())
     .then(data => this.setState({albums:data}))
 }
 renderAlbums(){
   return this.state.albums.map(album => <AlbumDetail key={album.title} album={album}/>)
 }
  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});
export default Albumlist;
