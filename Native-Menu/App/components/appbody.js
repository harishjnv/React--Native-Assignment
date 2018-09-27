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
    SectionList
} from 'react-native';
import _ from 'lodash';
import addDataArray from '../components/addDataArray'
//import {StartersCard,MainCourseCard,Offers} from '../components'
// import Offers from '../components/offers';
// import StartersCard from '../components/startersCard';
// import MainCourseCard from '../components/mainCourseCard';



export default class AppBody extends Component {




    renderItem = (dishtItem) => {
        return <Text style={styles.text}>{dishtItem.item.data}</Text>
    }
    renderSectionHeader = (sectionItem) => {
        //console.log(this.state.addDataArray.offersAvailable)

        //   console.log('9999999999999999999999999999999')
        console.log(addDataArray.offersAvailable)
        console.log(this.state.addDataArray.sections.length)
        for (let i = 0; i < this.state.addDataArray.sections.length; i++) {
            if (sectionItem.section.sectionId == addDataArray.sections[i].id) {
                return <Text style={styles.header}>{addDataArray.sections[i].name}</Text>
            }
        }
    }

    render() {
        let value = 'vfhtygfj';
        console.log('************')
        let forArrayData = this.props.fullData;
        //console.log(forArrayData);
        let newData = forArrayData.dishes;
        newData = _.groupBy(newData, d => d.sectionId)
        //console.log('***********************************')
       // console.log(newData);
        newData = _.reduce(newData, (acc, next, index) => {
            acc.push({
                sectionId: index,
                data: next
            })
            newData= acc;
        }, [])



        return (
            <ScrollView contentContainerStyle={styles.body}>
                {/* <Offers nameCheck={this.state.apiData.offersAvailable} />
                <Offers offerNumber={value} />
                <StartersCard dishes={this.props.fullData.data.dishes} />
                <MainCourseCard />
                */}
                <Text>{value}</Text>
                <SectionList
                    renderItem={(dishItem) => {
                        <Text style={styles.text}>{dishItem.item.data}</Text>
                    }
                }
                    renderSectionHeader={(sectionItem)=>{
                        <Text>{sectionItem.section.sectionId}</Text>
                    }}
                    sections={newData}
                    keyExtractor={(item) => item.name}
                />
                {/* renderItem={({ item, index, section }) => <Text key={index}>{item}</Text>}
                sections={[
                    { title: 'Title1', data: ['item1', 'item2'], renderItem: overrideRenderItem },
                    { title: 'Title2', data: ['item3', 'item4'] },
                    { title: 'Title3', data: ['item5', 'item6'] },
                ]}
                renderItem = (dishtItem) => { */}
    </ScrollView>  
    //return <Text style={styles.text}>{dishtItem.item.data}</Text>
    // }renderSectionHeader = (sectionItem) => {
    //     //console.log(this.state.addDataArray.offersAvailable)

    //     //   console.log('9999999999999999999999999999999')
    //     console.log(addDataArray.offersAvailable)
    //     console.log(this.state.addDataArray.sections.length)
    //     for (let i = 0; i < this.state.addDataArray.sections.length; i++) {
    //         if (sectionItem.section.sectionId == addDataArray.sections[i].id) {
    //             return <Text style={styles.header}>{addDataArray.sections[i].name}</Text>
    //         }
    //     }
    // }
     //       </ScrollView>
            )
        }
    
    }
const styles = StyleSheet.create({
                    body: {
                    flex: 1,
            },
    text: {
                    fontSize: 15,
            },
    header: {
                    fontSize: 25
            }
})