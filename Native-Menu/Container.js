import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { counterIncrement } from './actions/counerAction';
import HomeScreen from './components/HomeScreen';

class AppContainer extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <HomeScreen />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F5FC',
  },
});

function mapStateToProps(state) {
  return {
    count: state.hari
  }
}
export default connect(mapStateToProps, { counterIncrement })(AppContainer);