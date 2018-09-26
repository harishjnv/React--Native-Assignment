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
    render() {
        return (
            <View style={styles.tabBar}>
                <Text>Total Summery</Text>
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
})
