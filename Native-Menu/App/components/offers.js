import React, { Component } from 'react';
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

export default class Offers extends Component {
    render() {
        return (
            <View style={styles.offerBar}>
                <View style={styles.offers}>
                    <Image source={require('../assets/images/Offers.png')} style={{padding:5}} style={styles.Offerimg} />
                </View>
                <View>
                    <Text style={styles.OfferText}>
                        {this.props.offerNumber} offers are available
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    // offerBar:{
    //     flex:2,
    //     justifyContent:'center'
    // },
    Offerimg: {
        width: 24,
        height: 24,
    
        marginLeft: 32,
      paddingLeft:10,
      
      backgroundColor:'white',
         borderWidth:1,
        borderRadius:4,
      borderColor:'blue',
      

    },
    offers:{
      height:48,
    //  backgroundColor:'yellow',
      alignItems:'center',
      justifyContent:'center',
     
    },
    OfferText: {
        color: 'red',
        paddingLeft: 10,
        alignItems: 'center'
    },
    offerBar: {
        flexDirection: 'row',
        height: 48,
        //paddingVertical: 10,
        alignItems: 'center',
        //justifyContent:'space-around',
        backgroundColor: '#F2F5FC',
        marginTop: 10
    }

})