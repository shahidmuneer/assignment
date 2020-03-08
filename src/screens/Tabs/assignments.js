//import liraries
import React, { memo, Component } from 'react';
import { View, Text, TextInput, DatePickerAndroid, ScrollView, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';
import Modal from "react-native-modal";
import { Textarea } from 'native-base';
import * as DocumentPicker from 'expo-document-picker';

// create a component
class Assignments extends Component {
    constructor(props) {
        super(props);
        this.setDate = this.setDate.bind(this);
    }
    state = {
        isModalVisible: false,
        isModalVisible2: false,
        chosenDate: new Date(),
        Assignmentlist: [{ title: 'Title 1', name: 'Description ' }, { title: 'Title 2', name: 'i want to need this task asap' }, { title: 'Title 3', name: 'this is a simple paragraph that is meant to be nice and easy to type which is why there will be mommas no periods or any capital letters so i guess this means that it cannot really be considered a paragraph' }],
        filelist: [{ name: 'file1.pdf ' }, { name: 'file2.png' },]
    };

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    toggleModal2 = () => {
        this.setState({ isModalVisible2: !this.state.isModalVisible2 });
    };
    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }
    operner = async () => {
        try {
            const { action, year, month, day } = await DatePickerAndroid.open({
                // Use `new Date()` for current date.
                // May 25 2020. Month 0 is January.
                date: new Date(2020, 4, 25),
                mode: 'spinner'
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                // Selected year, month (0-11), day
            }
        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }
    }
    Uploadfile = () => {
        DocumentPicker.getDocumentAsync();
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => this.toggleModal()}>
                    <View style={{ width: 200, height: 50, marginTop: 20, backgroundColor: '#B1B9B9', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                        <Text style={{ color: 'white' }} >Upload Assignment</Text>
                    </View>
                </TouchableWithoutFeedback>
                {this.state.Assignmentlist.map((data, i) => (
                    <TouchableWithoutFeedback key={i} onPress={() => this.toggleModal2()}>
                        <View key={i} style={{ marginTop: 10, width: '90%', backgroundColor: '#cececd', borderRadius: 5, padding: 10, justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold', marginLeft: 10, fontSize: 14 }} >{data.title}</Text>
                            <Text numberOfLines={2} style={{ marginLeft: 10, fontSize: 13 }} >{data.name}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                ))}

                <Modal isVisible={this.state.isModalVisible}>
                    <ScrollView>
                        <View style={{ flex: 1, backgroundColor: 'white', padding: 10, borderRadius: 5 }}>
                            <TouchableWithoutFeedback onPress={() => this.Uploadfile()}>
                                <View style={{ width: '70%', marginTop: 10, alignSelf: 'center', height: 180, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#B1B9B9', borderRadius: 10 }}>
                                    <Image source={require('../../assets/uploadfile.png')} style={{ width: 90, height: 90 }} />
                                    <Text style={{ marginTop: 20 }}>
                                        Upload File
                            </Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <Text style={{ marginTop: 10, fontWeight: 'bold', marginLeft: 10 }}>Title</Text>
                            <TextInput style={{ marginTop: 10, borderWidth: 1, padding: 3, borderColor: '#cececd', width: '90%', alignSelf: 'center', borderRadius: 10, marginLeft: 10 }} />

                            <Text style={{ marginTop: 10, fontWeight: 'bold', marginLeft: 10 }}>Due Date</Text>
                            <Text style={{ marginTop: 10, alignSelf: 'center' }} onPress={() => this.operner()}>Select Date</Text>

                            <Text style={{ marginTop: 10, fontWeight: 'bold', marginLeft: 10 }}>Charges</Text>
                            <TextInput style={{ marginTop: 10, borderWidth: 1, padding: 3, borderColor: '#cececd', width: '90%', alignSelf: 'center', borderRadius: 10, marginLeft: 10 }} />
                            <Text style={{ marginTop: 10, fontWeight: 'bold', marginLeft: 10 }}>Description</Text>
                            <Textarea style={{ marginTop: 10, borderWidth: 1, padding: 3, borderColor: '#cececd', width: '90%', alignSelf: 'center', borderRadius: 10, }} />
                            {this.state.filelist.map((data, i) => (
                                <View key={i} style={{ alignSelf: 'center', marginTop: 10, width: '95%', backgroundColor: '#cececd', borderRadius: 5, height: 50, justifyContent: 'center' }}>
                                    <Text style={{ fontWeight: 'bold', marginLeft: 10 }} >{data.name}</Text>
                                </View>
                            ))}
                            <TouchableWithoutFeedback onPress={() => this.toggleModal()}>
                                <View style={{ width: 150, marginTop: 20, alignSelf: 'center', height: 50, backgroundColor: '#B1B9B9', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                                    <Text style={{ color: 'white', fontWeight: 'bold' }} >Upload</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </ScrollView>
                </Modal>
                <Modal isVisible={this.state.isModalVisible2}>
                    <View style={{ flex: 1, backgroundColor: 'white',borderRadius:5 ,padding:5}}>

                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{ flex: 1, backgroundColor: 'white', padding: 10, borderRadius: 5 }}>

                                <Text style={{ marginTop: 10, fontWeight: 'bold', marginLeft: 10 }}>Title</Text>
                                <Text style={{ marginTop: 10, alignSelf: 'center',fontSize:16,fontWeight:'bold' }} >Task1</Text>

                                <Text style={{ marginTop: 10, fontWeight: 'bold', marginLeft: 10 }}>Due Date</Text>
                                <Text style={{ marginTop: 10, alignSelf: 'center', color: 'red' }} >02/02/2020</Text>
                                <Text style={{ marginTop: 10, fontWeight: 'bold', marginLeft: 10 }}>Charges</Text>
                                <Text style={{ marginTop: 10, alignSelf: 'center' }} >5000</Text>
                                <Text style={{ marginTop: 10, fontWeight: 'bold', marginLeft: 10 }}>Description</Text>
                                <Textarea value={this.state.Assignmentlist[2].name} style={{ marginTop: 10,height:200, borderWidth: 1, padding: 3, borderColor: '#cececd', width: '95%', alignSelf: 'center', borderRadius: 10,  }} />
                                {this.state.filelist.map((data, i) => (
                                    <View key={i} style={{ alignSelf: 'center', marginTop: 10, width: '95%', backgroundColor: '#cececd', borderRadius: 5, height: 50, justifyContent: 'center' }}>
                                        <Text style={{ fontWeight: 'bold', marginLeft: 10 }} >{data.name}</Text>
                                    </View>
                                ))}

                            </View>
                            <TouchableWithoutFeedback onPress={() => this.toggleModal2()}>
                                <View style={{ width: 150, marginTop: 20, alignSelf: 'center', height: 50, backgroundColor: '#B1B9B9', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                                    <Text style={{ color: 'white', fontWeight: 'bold' }} >Back</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </ScrollView>
                    </View>
                </Modal>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
});

//make this component available to the app
export default memo(Assignments);
