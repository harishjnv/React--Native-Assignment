import React,{Component} from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View, Alert,
    Button
  } from 'react-native';

  export default class AppnavBar extends Component{

    render(){
        return(
            <View style={{backgroundColor:'#843821'}}>
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
        </View>
        )
    }
  }

  const styles= StyleSheet.create({
    navBar: {
        
        height:32 ,
        backgroundColor: 'white',
        elevation: 3,
    
        flexDirection: 'row',
      
      },
      navBarText: {
        paddingHorizontal: 15,
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'space-around',
        
      },
  })