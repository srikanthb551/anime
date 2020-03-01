import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  StatusBar
} from 'react-native';
import { createDrawerNavigator,DrawerActions,} from 'react-navigation-drawer';

export default class Screen1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Facebook", image:require("../assets/fb5.png"),color:"#3b5898"},
        {id:2, title: "Twitter", image:require("../assets/tw.png"),color:"#01aced"} ,
        {id:4, title: "Instagram", image:require("../assets/inst.jpeg"),color:"#d53c4f"} ,
        {id:8, title: "Gmail", image:require("../assets/gm.jpg"),color:"#dd4e40"} ,
        {id:9, title: "Google Plus", image:require("../assets/gg.jpg"),color:"#dd4c3b"} ,
        {id:3, title: "LinkedIn", image:require("../assets/link1.png"),color:"#017bb6"} ,
        {id:5, title: "Snapchat", image:require("../assets/snap.png"),color:"#ebe13a"} ,
        {id:6, title: "Pinterest", image:require("../assets/pin.png"),color:"#b72c26"} ,
        {id:7, title: "Reddit", image:require("../assets/red.jpeg"),color:"#f84837"},       
        // {id:8, title: "Option 8", image:"https://img.icons8.com/flat_round/70/000000/cow.png"} ,
        // {id:9, title: "Option 9", image:"https://img.icons8.com/color/70/000000/coworking.png"} ,
        // {id:9, title: "Option 10",image:"https://img.icons8.com/nolan/70/000000/job.png"} ,
        // {id:1, title: "Option 1", image:"https://img.icons8.com/color/70/000000/cottage.png"},
        // {id:1, title: "Option 2", image:"https://img.icons8.com/color/70/000000/administrator-male.png"},
        // {id:2, title: "Option 3", image:"https://img.icons8.com/color/70/000000/filled-like.png"} ,
        // {id:3, title: "Option 4", image:"https://img.icons8.com/color/70/000000/facebook-like.png"} ,
        // {id:4, title: "Option 5", image:"https://img.icons8.com/color/70/000000/shutdown.png"} ,
        // {id:5, title: "Option 6", image:"https://img.icons8.com/color/70/000000/traffic-jam.png"} ,
        // {id:6, title: "Option 7", image:"https://img.icons8.com/dusk/70/000000/visual-game-boy.png"} ,
        // {id:8, title: "Option 8", image:"https://img.icons8.com/flat_round/70/000000/cow.png"} ,
        // {id:9, title: "Option 9", image:"https://img.icons8.com/color/70/000000/coworking.png"} ,
        // {id:9, title: "Option 10",image:"https://img.icons8.com/nolan/70/000000/job.png"} ,
      ]
    };
    this.viewabilityConfig = {
      waitForInteraction: true,
      viewAreaCoveragePercentThreshold: 95
  }
  }

  clickEventListener(item) {
    Alert.alert(item.title)
  }

  render() {
    return (

      <View style={styles.container}>
         <StatusBar backgroundColor={"#751e2c"} barStyle={"dark-content"}/>
        <FlatList style={styles.list}
        // viewabilityConfig={this.viewabilityConfig}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          // horizontal={true}
          // vertical={true}
          // numColumns={3}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <View style={{flexWrap:"wrap",flexDirection:"row"}}>
                {/* <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}> */}
                <TouchableOpacity  style={[styles.card,{backgroundColor:item.color}]} onPress={()=>this.props.navigation.navigate('Screen2')}>
                {/* <TouchableOpacity  style={styles.card} onPress={this.props.navigation.toggleDrawer}> */}
                  {/* <Image style={styles.cardImage} source={{uri:item.image}}/> */}
                  <Image style={styles.cardImage} source={item.image}/>
                  <Text style={[styles.title,{fontWeight:"bold",color:"white"}]}>{item.title}</Text>
                </TouchableOpacity>
                  
                {/* <View sty:le={styles.cardHeader}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>this.props.navigation.navigate('App');
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </View> */}
              </View>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    // marginTop:40,
    backgroundColor:'black',
    // flexWrap:"wrap",
    // flexDirection: 'column',
  },
  list: {
    // paddingHorizontal: 5,
    backgroundColor:"white",

  },
  listContainer:{
    // justifyContent:"center",
flexDirection: 'row',
flexWrap: 'wrap',
  },
  /******** card **************/
  card:{
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 10,
    marginHorizontal:10,
    backgroundColor:"white",
    //flexBasis: '42%',
    width:100,
    height:100,
    borderRadius:15,
    alignItems:'center',
    justifyContent:'center'
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    marginTop:15,
    height: 50,
    width: 50,
    alignSelf:'center'
  },
  title:{
    fontSize:12,
    flex:1,
    alignSelf:'center',
    color:"#696969"
  },
}); 