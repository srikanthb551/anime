import React, { Component } from 'react';
import {
  BackHandler,
  Platform,
  // WebView,
  RefreshControl,
  ScrollView,
  PermissionsAndroid,
  Alert
} from 'react-native';
import {WebView} from "react-native-webview";

export default class Screen2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }}
  webView = {
    canGoBack: false,
    ref: null,
  }

  _onRefresh=()=>{
    
  }
  
  onAndroidBackPress = () => {
    if (this.webView.canGoBack && this.webView.ref) {
      this.webView.ref.goBack();
      return true;
    }
    return false;
  }
  async requestContactPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }
  async requestLocationPermission() {
    try {
    const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
        'title': 'Location Access Permission',
        'message': 'We would like to use your location ' +
                    'so you we track you.'
        }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
        await navigator.geolocation.getCurrentPosition(
          (position) => {
            Alert.alert('latitiude:  ',position.coords.latitude.toFixed(2));
          },
          (error) => console.log(error),
          {enableHighAccuracy: false, timeout: 50000}
      );
    }
  else {
        console.log("Location permission denied")
    }
    } catch (err) {
    console.warn(err)
    }
}

componentDidMount() {
        this.requestLocationPermission();
        this.requestContactPermission()
    }
  componentWillMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onAndroidBackPress);
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress');
    }
  }

  render() {
    return (
      <ScrollView
	  contentContainerStyle={{flex: 1}}
	  // refreshControl={
	  //   <RefreshControl
	  //     refreshing={this.state.refreshing}
	  //     onRefresh={this._onRefresh.bind(this)}
	  //   />
	  // }
	>
      <WebView
        source={{ uri: "https://www.youtube.com/" }}
        geolocationEnabled={true}
        ref={(webView) => { this.webView.ref = webView; }}
        onNavigationStateChange={(navState) => { this.webView.canGoBack = navState.canGoBack; }}
      />
      </ScrollView>
    );
  }
}