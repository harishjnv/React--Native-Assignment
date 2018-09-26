import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View, Alert,
  Button,ActivityIndicator
} from 'react-native';
import NameHeader from '../components/nameheader';
import AppnavBar from '../components/navbar';
import AppBody from '../components/appbody';
import TabBar from '../components/tabbar';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor() {
    super();
    this.state = {
      isLoading: 'true',
      apiData: []
    }
  }

  componentDidMount() {
    return fetch('https://apis.fruitstone.in/cheese/api/exam001?key=%22ARPKG10236%22')
      .then((response) => response.json())
      .then((gotdata) => {
        this.setState({
          isLoading: false,
          // rawData:gotdata,
          apiData: gotdata.data,
          //  dishesData:gotdata.data.dishes,
        })
      }).catch((error) => console.log('There is an Error Occured' + error))
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator size='large' color='#60B244' />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <NameHeader resName={this.state.apiData}  />
        <AppnavBar />
        <AppBody fullData={this.state.apiData}/>
        <TabBar />
        {/* <View style={styles.restNameHeader}>
          <Text>Name Of Restaurent</Text>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.navBar}>
          <View style={styles.navBarText}>
            <Text style={{margin:5}}>Starters</Text>
            <Text>Main Course</Text>
            <Text>Salads</Text>
            <Text>Starters</Text>
            <Text>Desserts</Text>
            <Text>Beverages</Text>
          </View>

        </ScrollView>

        <View style={styles.body}>

        </View>
        <View style={styles.tabBar}>
        <Text>Total Summery</Text>
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F5FC',
    flex: 1,


  },
  // navBar: {
  //   height: 32,
  //   backgroundColor: 'white',
  //   elevation: 3,

  //   flexDirection: 'row',

  // },
  // navBarText: {
  //   paddingHorizontal: 15,
  //   flexDirection:"row",
  //   alignItems: 'center',
  //   justifyContent: 'space-around',

  // },
  // body: {
  //   flex: 1
  // },
  // tabBar: {
  //   backgroundColor: 'white',
  //   height: 60,
  //   borderTopWidth: 0.5,
  //   borderColor: '#E5E5E5',
  //   flexDirection: 'row',
  // },
  // restNameHeader: {
  //   height: 50,
  //   paddingHorizontal: 10,
  //   paddingTop: 10,

  // },
  // menuText: {
  //   paddingHorizontal: 20,
  //   flexDirection: 'row'
  // },
  // tabBar:{
  //   alignItems:'center',
  //   backgroundColor:'#60B244',
  //   height:40,
  //   justifyContent:'center'
  //}

}
);