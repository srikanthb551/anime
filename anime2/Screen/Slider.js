import React, { Component } from 'react';
import { View, Text,StyleSheet,ScrollView,ImageBackground,Image } from 'react-native';
import {DrawerNavigatorItems} from "react-navigation-drawer"
export default  Slider = props =>(
<ScrollView>
    <ImageBackground
    source={require("../assets/school.png")}
    style={{padding:16,paddingTop:48,width:undefined}}
   >
    <Image source={require("../assets/school.png")}
    style={{
        width:80,
        height:80,
        borderRadius:40,
        borderWidth:4,
        borderColor:"#fff",
        alignSelf:"center"
    }}
    />    
    </ImageBackground>
    <View style={{flex:1}}>
<DrawerNavigatorItems {...props}/>
    </View>
    {/* <Text>hi</Text> */}
</ScrollView>
)

const styles = StyleSheet.create({
container:{
    flex:1
},
profile:{
    width:80,
    height:80,
    borderRadius:40,
    borderEndWidth:3,
    borderColor:"#FFF"

}
})