//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, DatePickerAndroid,ScrollView, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';
import Modal from "react-native-modal";
import { Textarea } from 'native-base';
import * as DocumentPicker from 'expo-document-picker';
// create a component
class AssignmentDetail extends Component {
    constructor(props) {
        super(props);
        this.setDate = this.setDate.bind(this);
    }
    state = {
        isModalVisible: false,
        chosenDate: new Date(),
        Assignmentlist: [{ name: 'Description ' }, { name: 'i want to need this task asap' }, { name: 'this is a simple paragraph that is meant to be nice and easy to type which is why there will be mommas no periods or any capital letters so i guess this means that it cannot really be considered a paragraph' }],
        filelist: [{ name: 'file1.pdf ' }, { name: 'file2.png' },]
    };

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
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
           
                    <ScrollView>
                    <View style={{ flex: 1, backgroundColor: 'white', padding: 10, borderRadius: 5 }}>
                       
                        <Text style={{ marginTop: 10, fontWeight: 'bold', marginLeft: 10 }}>Due Date</Text>
                        <Text style={{ marginTop: 10, alignSelf: 'center' }} >02/02/2020</Text>

                        <Text style={{ marginTop: 10, fontWeight: 'bold', marginLeft: 10 }}>Charges</Text>
                        <TextInput editable={false} value={5000} style={{ marginTop: 10, borderWidth: 1, padding: 3, borderColor: '#cececd', width: '90%', alignSelf: 'center', borderRadius: 10, marginLeft: 10 }} />
                        <Text style={{ marginTop: 10, fontWeight: 'bold', marginLeft: 10 }}>Description</Text>
                        <Textarea value={this.state.filelist[2].name} style={{ marginTop: 10, borderWidth: 1, padding: 3, borderColor: '#cececd', width: '90%', alignSelf: 'center', borderRadius: 10, marginLeft: 10 }} />
                        {this.state.filelist.map((data, i) => (
                            <View key={i} style={{alignSelf:'center', marginTop: 10, width: '90%', backgroundColor: '#cececd', borderRadius: 5, height: 50, justifyContent: 'center' }}>
                                <Text style={{ fontWeight: 'bold', marginLeft: 10 }} >{data.name}</Text>
                            </View>
                        ))}

                    </View>
                    </ScrollView>
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
export default AssignmentDetail;
