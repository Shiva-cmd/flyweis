/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/EvilIcons';
import List from '../components/list';
const Setting = (props) => {
    return (
        <SafeAreaView style={{ marginHorizontal: 8, flex: 1 }}>

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: 8,

                }}>
                <View style={{ position: 'absolute', left: 0 }}>
                    <Icon name="chevron-left" size={40} color="black" />
                </View>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Settings</Text>
            </View>
            <View style={{ marginTop: 20 }}>
                <List item={"FaceVerification"} onPress={()=>{props.navigation.navigate('FaceVerification');}}/>
                <List item={"ChatPrice"} onPress={()=>{props.navigation.navigate('ChatPrice');}} />
                <List item={"uploadPoster"} onPress={()=>{props.navigation.navigate('uploadPoster');}}/>
                <List item={"About us"} onPress={()=>{props.navigation.navigate('AboutUs');}}/>
                <List item={"EditProfile"} onPress={()=>{props.navigation.navigate('EditProfile');}}/>
            </View>
            <TouchableOpacity onPress={()=>Alert.alert("logout")}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={['#E1306C', '#C13584', '#5851DB']}

                style={styles.linearGradient}
            >
                <Text style={{ color: "white", fontSize: 16 }}>LOGOUT</Text>
            </LinearGradient>
            </TouchableOpacity>
        </SafeAreaView >
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 24,
        padding: 16,
        marginHorizontal: 52,
        marginTop: 20,

    },
});
export default Setting;
