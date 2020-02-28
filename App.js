import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Modal, TouchableHighlight, FlatList } from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE, Callout} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
navigator.geolocation = require('@react-native-community/geolocation');

class App extends Component {
  state = {
    modalVisible: false,
    //longitude: null,
    //latitude: null
  };

    componentDidMount() {
     Geolocation.getCurrentPosition(
       position => {
         const location = JSON.stringify(position);
         var crd = position.coords;
         this.setState({ 
           modalVisible: false,
           longitude: crd.longitude,
           latitude: crd.latitude });
         //console.log(location);
       },
       error => Alert.alert(error.message),
       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
     );
   };
  

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render(){
    return (
      <View style={styles.container}  > 
        <Modal 
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
            <View style={styles.header}> 
            </View>
            <View> 
              <Text style={{fontSize:23, paddingBottom: 5}}>
                Ube cheese pandesal
              </Text>
              <Text style={{fontSize:23, paddingBottom: 5}}>
                Taas pila
              </Text>
              <Text style={{fontSize:23, paddingBottom: 5}}>
                Nahutdan mi sa kadaghan tao
              </Text>

            </View>
            <View style={styles.word}> 
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={styles.text}>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </Modal>


        <MapView style={styles.map}
          showsUserLocation = {true}
          provider={PROVIDER_GOOGLE} 
          initialRegion={{
          latitude: 8.476480, 
          longitude: 124.645903, 
          latitudeDelta:0.0095,
          longitudeDelta:0.012
          }}>

            <Marker coordinate={{latitude:8.470758, longitude:124.649717}}>
              <Callout onPress={() => this.calloutPress()}>
                <Text>Jonna's Bakeshop</Text>
              </Callout>
            </Marker>

            <Marker coordinate={{latitude:8.476005, longitude:124.650550}}>
              <Callout onPress={() => this.calloutPress()}>
                <Text>Jonna's Bakeshop</Text>
              </Callout>
            </Marker>

            <Marker coordinate={{latitude:8.472388, longitude:124.647508}}>
              <Callout onPress={() => this.calloutPress()}>
                <Text>Tiyoy's Bakeshop</Text>
              </Callout>
            </Marker>

            <Marker coordinate={{latitude:8.47522, longitude:124.637738}}>
              <Callout onPress={() => this.calloutPress()}>
                <Text>Julie's Bakeshop</Text>
              </Callout>
            </Marker>

            <Marker coordinate={{latitude:8.477955, longitude:124.642920}}>
              <Callout onPress={() => this.calloutPress()}>
                <Text>Kathryn's Bakeshop</Text>
              </Callout>
            </Marker>

        </MapView>
      </View>
    );
  }
  calloutPress() {
    this.setModalVisible(true);
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  word: {
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text: {
    fontSize: 30,
  },
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue'
  }
});


export default App;
