import React from "react";
import { View, Text,StyleSheet,Image, Linking } from "react-native";
import CardSection from "../Card/CardSection";
import Card from "../Card/Card";
import Button  from '../Header/Button'

const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnaiContainer}>
          <Image
            style={styles.thumbnailStyle}
            source={{uri:props.album.thumbnail_image}} />
        </View>
        <View style={styles.headerContentStyle}>
        <Text style={styles.headerTextStyle}>{props.album.title}</Text>
        <Text>{props.album.artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
        style={styles.imageStyle} 
        source={{uri:props.album.image}}/>
      </CardSection>
      <CardSection>
        <Button onPress ={() =>{
          Linking.openURL(props.album.url)
        }}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  headerContentStyle:{
    flexDirection:'column',
    justifyContent:'space-around'
  },
  thumbnailStyle:{
    height:50,
    width:50
  },
  thumbnaiContainer:{
    justifyContent:'center',
    alignItems:'center',
    marginLeft:10,
    marginRight:10
  },
  headerTextStyle:{
    fontSize:18
  },
  imageStyle:{
    height:300,
    flex:1,
    width:null
  }

})

export default AlbumDetail;
