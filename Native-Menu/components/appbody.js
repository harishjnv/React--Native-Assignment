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
import TabBar from './tabbar';

export default class AppBody extends Component {

    constructor(props) {
        super(props);
        this.state = {
            totalPrice: 0,
            addNotClicked: true,
            quantityArray: [],
            apiData: this.props.fullData
        }
    }
    onPressButton = (recieve) => {
        this.state.quantityArray.push(recieve);

        var apiData = this.state.apiData;
        var quantityArray = this.state.quantityArray

        let totalPrice = 0;

        quantityArray.forEach(function (element) {
            for (let i = 0; i < quantityArray.length; i++) {
                if (element == apiData.dishes[i].id) {
                    totalPrice += apiData.dishes[0].price
                }
            }
        })
        this.setState(
            {
                addNotClicked: false,
                totalPrice: totalPrice
            })

    }



    reduceQuantity = (recieve) => {
        let quantityArray = this.state.quantityArray;
        let idx = recieve;
        if (idx != -1) quantityArray.splice(idx, 1);

        let totalPrice = 0;
        let apiData = this.state.apiData;
        quantityArray.forEach(function (element) {
            for (let i = 0; i < quantityArray.length; i++) {
                if (element == apiData.dishes[i].id) {
                    totalPrice += apiData.dishes[0].price
                }
            }
        })

        this.setState({ totalPrice })

    }




    renderItem = (dishtItem) => {

        let value = dishtItem.item.id;
        let countArray = this.state.quantityArray;
        let itemQuantity = countArray.filter(x => x == value).length;

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
                    {itemQuantity == 0 ?
                        (
                            <TouchableHighlight
                                style={styles.button}
                                underlayColor="yellow"
                                onPress={() => this.onPressButton(value)} >
                                <Text style={styles.priceAdd}>ADD</Text>
                            </TouchableHighlight>)


                        : (
                            <View style={styles.buttonAdd}>
                                <TouchableHighlight
                                    underlayColor="yellow"
                                    onPress={() => this.reduceQuantity(value)}>
                                    <Text style={{ borderRightWidth: 1, borderRightColor: "#60B244", paddingRight: 8, fontFamily: "monospace" }} >-</Text>
                                </TouchableHighlight>
                                <Text style={{ alignItems: "center" }}>{itemQuantity}</Text>

                                <TouchableHighlight
                                    underlayColor="yellow"
                                    onPress={() => this.onPressButton(value)}>
                                    <Text style={{ borderLeftWidth: 1, borderLeftColor: "#60B244", paddingLeft: 8, fontFamily: "monospace" }} >+</Text>

                                </TouchableHighlight>

                            </View>
                        )
                    }

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








    render() {

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

        return (
            <View style={styles.container}>

                <SectionList
                    renderItem={this.renderItem}
                    renderSectionHeader={this.renderSectionHeader}
                    sections={newData}
                    keyExtractor={(item) => item.name}
                />
                <TabBar itemsData={this.state.quantityArray.length} totalPrice={this.state.totalPrice} />

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

    },
    pbContainer: {
        justifyContent: "space-between",
        flexDirection: "row"

    },
    button: {
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: "center",
        width: 64,
        height: 24,
        padding: 10,
        marginRight: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#60B244",

    },
    buttonAdd: {

        flexDirection: 'row',

        justifyContent: "space-around",
        width: 70,
        height: 24,

        marginRight: 16,
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