import React from 'react';
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

export default class NameHeader extends React.Component {
    render() {
        let headerValue = this.props.resName;
        return (
            <View style={styles.restNameHeader}>
                <Text style={styles.resName}>{headerValue.restaurantName}</Text>
                <Text style={styles.resLocation}>{headerValue.compactAddress}</Text>
            </View>
        )
    }
};

styles = StyleSheet.create({
    restNameHeader: {
        height: 50,
        paddingHorizontal: 10,
        paddingTop: 10,
        backgroundColor: '#E5E5E5',
        flexDirection: 'column',
    },
    resName: {
        fontSize: 12,
        fontWeight: "bold",
       fontFamily:"monospace"       
    },
    resLocation: {
        fontSize: 12,
        fontFamily:"monospace"
    }
})