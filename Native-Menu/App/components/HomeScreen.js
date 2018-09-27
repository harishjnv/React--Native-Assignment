import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View, Alert,
  Button, ActivityIndicator
} from 'react-native'
import NameHeader from '../components/nameheader';
import AppnavBar from '../components/navbar';
import AppBody from '../components/appbody';
import TabBar from '../components/tabbar';
import Offers from '../components/offers'


export default class HomeScreen extends React.Component {

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

          apiData: gotdata.data,

        })
      }).catch((error) => console.log('There is an Error Occured' + error))
  }


  render() {
    // console.log(this.state.apiData)
    if (this.state.isLoading) {
      return (
        <View style={styles.isLoading}>
          <ActivityIndicator size='large' color='#60B244' />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <NameHeader resName={this.state.apiData} />
        <AppnavBar />
        <Offers offerNumber={this.state.apiData} />
        <AppBody fullData={this.state.apiData} />
        <TabBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F5FC',
    flex: 1,
  },
  isLoading: {
    flex: 1,
    padding: 20,
    justifyContent: "center"
  }
}
);