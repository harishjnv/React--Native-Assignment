import React, { Component } from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View, Alert,
    Button, ActivityIndicator,
    SectionList,
    TouchableHighlight
} from 'react-native';
import _ from 'lodash';

export default class AppBody extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modifiedApiData: [],
        }
    }

    renderItem = (dishtItem) => {

        return (

            <View style={styles.itemDetails}>
                <View style={{ flexDirection: "row", alignItems: "center", paddingLeft: 16 }}>
                    {dishtItem.item.isVeg ?
                        (<Image source={require('../assets/Veg.png')} style={styles.isvegIcon} />)
                        : (<Image source={require('../assets/NonVeg.png')} style={styles.isNonvegIcon} />)}
                    <Text style={styles.itemName}>{dishtItem.item.data}</Text>
                </View>


                <View style={styles.pbContainer}>
                    <Text style={styles.price}>$ {dishtItem.item.price}</Text>


                    <TouchableHighlight
                        style={styles.button}
                        underlayColor="yellow"
                        onPress={this.onPressButton}
                    >
                        <Text style={styles.priceAdd}>ADD</Text>
                    </TouchableHighlight>
                    {/* <Button title="add" onPress={this.onPressButton} color="#E5E5E5" /> */}
                </View>

            </View>

        )
    }
    renderSectionHeader = (sectionItem) => {
        let addArrayData = this.props.fullData;
        for (let i = 0; i < addArrayData.sections.length; i++) {

            if (sectionItem.section.sectionId == addArrayData.sections[i].id) {
                return (
                    <View style={styles.secContainer}>
                        <Text style={styles.sectionTitle}>{addArrayData.sections[i].name}</Text>
                    </View>

                )
            }
        }
    }

    onPressButton = () => {
        this.setState(
            { counterValue: 1 }
        )
    }


    render() {

        //console.log('************')
        let addArrayData = this.props.fullData;
        let count = addArrayData.dishes.length;

        let newData = addArrayData.dishes;
        // given api data does not have a "data array" which is necessary for sectionList
        // here I am pushing a data array into dishes
        for (let i = 0; i < count; i++) {
            newData[i].data = [];
            newData[i].data.push(newData[i].name);
        }

        newData = _.groupBy(newData, d => d.sectionId)

        newData = _.reduce(newData, (acc, next, index) => {
            acc.push({
                sectionId: index,
                data: next
            })
            return acc
        }, [])
        //console.log(newData);

        return (
            <View style={styles.container}>

                <SectionList
                    renderItem={this.renderItem}
                    renderSectionHeader={this.renderSectionHeader}
                    sections={newData}
                    keyExtractor={(item) => item.name}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F5FC',
      
    },
    secContainer: {
        paddingVertical: 10,
        justifyContent: "flex-start",
        backgroundColor: "#FFFFFF",
        marginTop: 10
    },
    sectionTitle: {
        fontSize: 20,
        fontFamily: "monospace",
        fontWeight: "bold",
        paddingLeft: 16,
        paddingVertical: 5,

    },
    itemDetails: {
        paddingVertical: 10,
        backgroundColor: "#FFFFFF"
    },
    itemName: {
        fontSize: 12,
        fontFamily: "monospace",
        paddingLeft: 4
    },
    price: {
        fontSize: 12,
        fontFamily: "monospace",
        paddingVertical: 6,
        paddingLeft: 16
    },
    priceAdd: {
        fontSize: 12,
        fontFamily: "monospace",
        paddingVertical: 6,
        //marginLeft:16
    },
    pbContainer: {
        justifyContent: "space-between",
        flexDirection: "row"
        // paddingVertical:5
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: "center",
        width: 64,
        height: 24,
        padding: 10,
        marginRight: 16,
        //paddingLeft:16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#60B244",

    },
    isvegIcon: {
        height: 8,
        width: 8,
        padding: 2,
        borderWidth: 1,
        borderColor: "#60B244",

    },
    isNonvegIcon: {
        height: 8,
        width: 8,
        padding: 2,
        borderWidth: 1,
        borderColor: "#843821",

    }
});