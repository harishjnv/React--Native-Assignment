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
                    <Image source={require('../assets/Offers.png')} style={{ padding: 5 }} style={styles.Offerimg} />
                </View>
                <View>
                    <Text style={styles.OfferText}>
                        {this.props.offerNumber.offersAvailable} OFFERS ARE AVAILABLE
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    offerBar: {
        flexDirection: 'row',
        height: 48,
        //paddingVertical: 10,
        alignItems: 'center',
        //justifyContent:'space-around',
        backgroundColor: '#FFFFFF',
        marginTop: 10,
        overflow: "visible"
    },

    Offerimg: {
        width: 24,
        height: 24,

    },
    offers: {
        height: 48,
        width: 48,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: "#F44336",
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: "visible",
        marginLeft: 16

    },
    OfferText: {
        color: '#60B244',
        paddingLeft: 15,
        alignItems: 'center',
        fontFamily: "monospace",
        fontSize: 12,
        fontWeight: "500"
    },

})