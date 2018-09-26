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
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import { bold } from 'ansi-colors';

export default class NameHeader extends React.Component {
    render() {
        let headerValue=this.props.resName
        return (
            <View style={styles.restNameHeader}>
                <Text >{headerValue.restaurantName}</Text>
                <Text>{headerValue.location}</Text>
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
        flexDirection:'column'
        //fontWeight:'bold',
        // fontFamily:"SpaceMono"

    },
})