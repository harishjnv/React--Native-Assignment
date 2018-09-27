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
            <View style={{marginTop:4}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.navBar}>
          <View style={styles.navBarText}>
            <Text style={styles.text}>Starters</Text>
            <Text style={styles.text}>Main Course</Text>
            <Text style={styles.text}>Salads</Text>
            <Text style={styles.text}>Starters</Text>
            <Text style={styles.text}>Desserts</Text>
            <Text style={styles.text}>Beverages</Text>
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
        paddingHorizontal:10,
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor:"#FFFFFF",
        
        
      },
      text:{
        paddingVertical:9,
        fontSize:10,
        fontFamily:"monospace",
        paddingHorizontal:10
      }
  })