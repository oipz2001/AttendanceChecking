// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;


// import React, { Component } from 'react';
// import {
//   Modal,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableHighlight,
//   ScrollView,
//   View,
//   PermissionsAndroid,
//   Button,
//   FlatList
// } from 'react-native';

// import wifi from 'react-native-android-wifi';
import SelectMultiple from 'react-native-select-multiple'
import React, { Component } from 'react'
import { View,Text, Button } from 'react-native'


const fruits = ['Apples', 'Oranges', 'Pears']
// --- OR ---
// const fruits = [
//   { label: 'Apples', value: 'appls' },
//   { label: 'Oranges', value: 'orngs' },
//   { label: 'Pears', value: 'pears' }
// ]

class App extends Component {
  
  state = { selectedFruits: [] , show: false }

  onSelectionsChange = (selectedFruits) => {
    // selectedFruits is array of { label, value }

    
    this.setState({ selectedFruits })
   
    
    
    
    
  }

  pressButton = () =>{
    if (this.state.show == true) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }

  }

  

  

  render () {
    var result = this.state.selectedFruits
    var show = this.state.show
    return (
      <View>
        <SelectMultiple
          items={fruits}
          selectedItems={this.state.selectedFruits}
          onSelectionsChange={this.onSelectionsChange} />
          <Button title="Show/Hide Selected" onPress={this.pressButton}/>
          {this.state.show && result.map(result => <Text style={{backgroundColor:"red"}}>{result.label}</Text>)}
          {/* { this.state.show && 
            <Text>Hellp</Text>

          } */}
      </View>
    )
  }
}
export default App

// type Props = {};
// export default class App extends Component<Props> {
//   constructor(props){
//     super(props);
//     this.state = {
//       isWifiNetworkEnabled: null,
//       ssid: null,
//       pass: null,
//       ssidExist: null,
//       currentSSID: null,
//       currentBSSID: null, 
//       wifiList: null,
//       modalVisible: false,
//       status:null,
//       level: null,
//       ip: null,
//     };

//   }

//   Interval(){
    
//   }

//   componentDidMount (){
//     console.log(wifi);
    
    
//     this.askForUserPermissions();
//     // setInterval(() => {
//     //   wifi.loadWifiList((wifiStringList) => {
//     //     // console.log(wifiStringList);
//     //     var wifiArray = JSON.parse(wifiStringList);
//     //     console.log('---------------------------------------');
//     //     for(var i=0;i<wifiArray.length;i++){
//     //       console.log(wifiArray[i].SSID +"      "+ wifiArray[i].level + "      " + wifiArray[i].BSSID  );
//     //     }
//     //   },
//     //   (error) => {
//     //     console.log(error);
//     //   }
//     // );
      
//     // }, 3000);
 
    
    
//   }

//   async askForUserPermissions() {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           'title': 'Wifi networks',
//           'message': 'We need your permission in order to find wifi networks'
//         }
//       )
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         console.log("Thank you for your permission! :)");
//       } else {
//         console.log("You will not able to retrieve wifi available networks list");
//       }
//     } catch (err) {
//       console.warn(err)
//     }
//   }

//   serviceCheckOnPress(){
//     wifi.isEnabled(
//       (isEnabled)=>{
//         this.setState({isWifiNetworkEnabled: isEnabled});
//         console.log(isEnabled);
//       });
//   }

//   serviceSetEnableOnPress(enabled){
//     wifi.setEnabled(enabled)
//   }

//   connectOnPress(){
//     wifi.findAndConnect(this.state.ssid, this.state.pass, (found) => {
//       this.setState({ssidExist:found});
//     });
//   }

//   disconnectOnPress(){
//     wifi.disconnect();
//   }

//   getSSIDOnPress(){
//     wifi.getSSID((ssid) => {
//       this.setState({currentSSID:ssid});
//     });
//   }

//   getBSSIDOnPress(){
//     wifi.getBSSID((bssid) => {
//       this.setState({currentBSSID:bssid});
//     });
//   }

//   getWifiNetworksOnPress(){
//     wifi.isEnabled((isEnabled)=>{
//       if (!isEnabled) {
//         wifi.setEnabled(true)
//       }
//     }) 
//     wifi.loadWifiList((wifiStringList) => {
//         // console.log(wifiStringList);
//         var wifiArray = JSON.parse(wifiStringList);
//         console.log( wifiArray[0]);
//         this.setState({
//           wifiList:wifiArray,
//           modalVisible: true
//         });
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   }

//   connectionStatusOnPress(){
//     wifi.connectionStatus((isConnected) => {
//       this.setState({status:isConnected});
//     });
//   }

//   levelOnPress(){
//     wifi.getCurrentSignalStrength((level)=>{
//       this.setState({level:level});
//     });
//   }

//   ipOnPress(){
//     wifi.getIP((ip)=>{
//       this.setState({ip:ip});
//     });
//   }


//   renderModal(){
//     var wifiListComponents = [];
//     for (w in this.state.wifiList){
//       wifiListComponents.push(
//         <View key={w} style={styles.instructionsContainer}>
//           <Text style={styles.instructionsTitle}>{this.state.wifiList[w].SSID}</Text>
//           <Text>BSSID: {this.state.wifiList[w].BSSID}</Text>
//           <Text>Capabilities: {this.state.wifiList[w].capabilities}</Text>
//           <Text>Frequency: {this.state.wifiList[w].frequency}</Text>
//           <Text>Level: {this.state.wifiList[w].level}</Text>
//           <Text>Timestamp: {this.state.wifiList[w].timestamp}</Text>
//         </View>
//       );
//     }
//     return wifiListComponents;
//   }

//   render() {
//     return (
//     // <ScrollView>
//     //   <View style={styles.container}>
//     //     <Text style={styles.title}>React Native Android Wifi Example App</Text>
//     //     <View style={styles.instructionsContainer}>
//     //       <Text style={styles.instructionsTitle}>Check wifi service status</Text>
//     //       <View style={styles.row}>
//     //         <TouchableHighlight style={styles.button} onPress={this.serviceCheckOnPress.bind(this)}>
//     //           <Text style={styles.buttonText}>Check</Text>
//     //         </TouchableHighlight>
//     //         <Text style={styles.answer}>{this.state.isWifiNetworkEnabled==null?"":this.state.isWifiNetworkEnabled?"Wifi service enabled :)":"Wifi service disabled :("}</Text>
//     //       </View>
//     //     </View>
//     //     <View style={styles.instructionsContainer}>
//     //       <Text style={styles.instructionsTitle}>Enable/Disable wifi network</Text>
//     //       <View style={styles.row}>
//     //         <TouchableHighlight style={styles.button} onPress={this.serviceSetEnableOnPress.bind(this,true)}>
//     //           <Text style={styles.buttonText}>Enable</Text>
//     //         </TouchableHighlight>
//     //         <TouchableHighlight style={styles.button} onPress={this.serviceSetEnableOnPress.bind(this,false)}>
//     //           <Text style={styles.buttonText}>Disable</Text>
//     //         </TouchableHighlight>
//     //       </View>
//     //     </View>
//     //     <View style={styles.instructionsContainer}>
//     //       <Text style={styles.instructionsTitle}>Sign device into a specific network:</Text>
//     //       <Text style={styles.instructions}>SSID</Text>
//     //       <TextInput 
//     //         style={styles.textInput}
//     //         underlineColorAndroid='transparent'
//     //         onChangeText={(event)=>this.state.ssid=event}
//     //         value={this.state.ssid}
//     //         placeholder={'ssid'} />
//     //       <Text style={styles.instructions}>Password</Text>
//     //       <TextInput
//     //         style={styles.textInput}
//     //         secureTextEntry={true} 
//     //         underlineColorAndroid='transparent'
//     //         onChangeText={(event)=>this.state.pass=event}
//     //         value={this.state.pass}
//     //         placeholder={'password'} />
//     //       <View style={styles.row}>
//     //         <TouchableHighlight style={styles.button} onPress={this.connectOnPress.bind(this)}>
//     //           <Text style={styles.buttonText}>Connect</Text>
//     //         </TouchableHighlight>
//     //         <Text style={styles.answer}>{this.state.ssidExist==null?"":this.state.ssidExist?"Network in range :)":"Network out of range :("}</Text>
//     //       </View>
//     //     </View>
//     //     <View style={styles.instructionsContainer}>
//     //       <Text style={styles.instructionsTitle}>Disconnect current wifi network</Text>
//     //       <View style={styles.row}>
//     //         <TouchableHighlight style={styles.button} onPress={this.disconnectOnPress.bind(this)}>
//     //           <Text style={styles.buttonText}>Disconnect</Text>
//     //         </TouchableHighlight>
//     //       </View>
//     //     </View>
//     //     <View style={styles.instructionsContainer}>
//     //       <Text style={styles.instructionsTitle}>Current SSID</Text>
//     //       <View style={styles.row}>
//     //         <TouchableHighlight style={styles.button} onPress={this.getSSIDOnPress.bind(this)}>
//     //           <Text style={styles.buttonText}>Get SSID</Text>
//     //         </TouchableHighlight>
//     //         <Text style={styles.answer}>{this.state.currentSSID + ""}</Text>
//     //       </View>
//     //     </View>
//     //     <View style={styles.instructionsContainer}>
//     //       <Text style={styles.instructionsTitle}>Current BSSID</Text>
//     //       <View style={styles.row}>
//     //         <TouchableHighlight style={styles.button} onPress={this.getBSSIDOnPress.bind(this)}>
//     //           <Text style={styles.buttonText}>Get BSSID</Text>
//     //         </TouchableHighlight>
//     //         <Text style={styles.answer}>{this.state.currentBSSID + ""}</Text>
//     //       </View>
//     //     </View>
//     //     <View style={styles.instructionsContainer}>
//     //       <Text style={styles.instructionsTitle}>Get all wifi networks in range</Text>
//     //       <TouchableHighlight style={styles.bigButton} onPress={this.getWifiNetworksOnPress.bind(this)}>
//     //         <Text style={styles.buttonText}>Available WIFI Networks</Text>
//     //       </TouchableHighlight>
//     //     </View>
//     //     <View style={styles.instructionsContainer}>
//     //       <Text style={styles.instructionsTitle}>Connection status</Text>
//     //       <View style={styles.row}>
//     //         <TouchableHighlight style={styles.bigButton} onPress={this.connectionStatusOnPress.bind(this)}>
//     //           <Text style={styles.buttonText}>Get connection status</Text>
//     //         </TouchableHighlight>
//     //         <Text style={styles.answer}>{this.state.status==null?"":this.state.status?"You're connected :)":"You're not connected :("}</Text>
//     //       </View>
//     //     </View>
//     //     <View style={styles.instructionsContainer}>
//     //       <Text style={styles.instructionsTitle}>Get current wifi signal strength</Text>
//     //       <View style={styles.row}>
//     //         <TouchableHighlight style={styles.bigButton} onPress={this.levelOnPress.bind(this)}>
//     //           <Text style={styles.buttonText}>Get signal strength</Text>
//     //         </TouchableHighlight>
//     //         <Text style={styles.answer}>{this.state.level==null?"":this.state.level}</Text>
//     //       </View>
//     //     </View>
//     //     <View style={styles.instructionsContainer}>
//     //       <Text style={styles.instructionsTitle}>Get current IP</Text>
//     //       <View style={styles.row}>
//     //         <TouchableHighlight style={styles.button} onPress={this.ipOnPress.bind(this)}>
//     //           <Text style={styles.buttonText}>Get IP</Text>
//     //         </TouchableHighlight>
//     //         <Text style={styles.answer}>{this.state.ip==null?"":this.state.ip}</Text>
//     //       </View>
//     //     </View>
//     //   </View>
//     //   <Modal 
//     //     visible={this.state.modalVisible}
//     //     onRequestClose={() => {}}>
//     //     <TouchableHighlight style={styles.button} onPress={()=>this.setState({modalVisible:false})}>
//     //       <Text style={styles.buttonText}>Close</Text>
//     //     </TouchableHighlight>
//     //     <ScrollView>
//     //     {this.renderModal()}
//     //     </ScrollView>
//     //   </Modal>
//     // </ScrollView>
//     <View style={{padding:0,flex: 1,backgroundColor:'red'}}>
//       <View style={{flex:3,backgroundColor:'skyblue'}}>
//         <Text style={styles.title}>Register Mac Address</Text>
//         <View style={{backgroundColor:'green'}}>
//         <FlatList
//         data={[
//           {key: 'Devin'},
//           {key: 'Dan'},
//           {key: 'Dominic'},
//           {key: 'Jackson'},
//           {key: 'James'},
//           {key: 'Joel'},
//           {key: 'John'},
//           {key: 'Jillian'},
//           {key: 'Jimmy'},
//           {key: 'Julie'},
//         ]}
//         renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
//       />
//        <Button title="Register Mac"/>
//         </View>
        
//         </View>
//         <View style={{flex:1,backgroundColor:'blue'}}>
//         <View style={{flex:1}}>
//         <Text style={styles.title}>True/False</Text>
//         </View>
//         <View style={{flex:1}}>
//         <Button title="Check local MAC" />
//         </View>
        
        
        
//         </View>
//     </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding:15,
//     backgroundColor: '#F5FCFF',
//     marginBottom:100
//   },
//   row:{
//     flexDirection:'row'
//   },
//   title: {
//     fontSize: 18,
//     alignSelf:"center"
//   },
//   instructionsContainer: {
//     padding:15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#CCCCCC',
//   },
//   instructionsTitle: {
//     marginBottom:10,
//     color: '#333333'
//   },
//   instructions: {
//     color: '#333333'
//   },
//   button:{
//     padding:5,
//     width:120,
//     alignItems: 'center',
//     backgroundColor:'blue',
//     marginRight: 15,
//   },
//   bigButton:{
//     padding:5,
//     width:180,
//     alignItems: 'center',
//     backgroundColor:'blue',
//     marginRight: 15,
//   },
//   buttonText:{
//     color:'white'
//   },
//   answer:{
//     marginTop: 5,
//   }
// });