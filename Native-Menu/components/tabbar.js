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

export default class TabBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // apiData:this.props.apiData,
            // quantityArray:this.props.quantityArray
        }
    }
    render() {

        return (
            <View style={styles.tabBar}>
                <Text style={styles.tabBarText}> $ {this.props.totalPrice} | {this.props.itemsData} Items </Text>
            </View>
        )


    }

}
const styles = StyleSheet.create({
    tabBar: {
        alignItems: 'center',
        backgroundColor: '#60B244',
        height: 40,
        justifyContent: 'center'
    },
    tabBarText: {
        color: 'white',
        fontFamily: "monospace",
        fontSize: 12
    }
})
