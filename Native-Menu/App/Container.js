import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux';
import {counterIncrement} from './actions';
import HomeScreen from './components/HomeScreen';

 class AppContainer extends React.Component {
  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        {/* <Text>Open up App.js  working on your app!</Text>
        <Text>{this.props.count}</Text> */}
        <HomeScreen/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function mapStateToProps(state){
  return{
    count:state.hari
  }
}
export default connect(mapStateToProps,{counterIncrement})(AppContainer);