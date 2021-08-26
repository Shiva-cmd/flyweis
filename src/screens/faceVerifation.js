/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Check from 'react-native-vector-icons/AntDesign';
import {CommonActions} from '@react-navigation/native';
const FaceVerification = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',

          backgroundColor: '#E1306C',
          height: 48,
        }}>
        <View style={{position: 'absolute', left: 0, top: 8}}>
          <Icon
            name="chevron-left"
            size={40}
            color="white"
            onPress={() => props.navigation.dispatch(CommonActions.goBack())}
          />
        </View>

        <View
          style={{
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
              textAlignVertical: 'center',
            }}>
            Face Verification
          </Text>
        </View>
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 48}}>
        <Image
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
          style={{width: 240, height: 220, borderRadius: 20}}
        />
      </View>
      <View style={{justifyContent:"center",alignItems:"center"}}>
        <Check
          name="checkcircle"
          size={55}
          color="green"
          style={{
            position: 'absolute',
            borderWidth: -5,
            height: 55,
            width: 55,
            borderRadius: 55 / 2,
            backgroundColor:"white",
            
          }}
        />
      </View>
      <View style={{marginTop:32}}>
        <Text style={{fontWeight: 'bold', fontSize: 24, textAlign: 'center'}}>
          Upload Success
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          backgroundColor: '#E1306C',
          bottom: 40,
          position: 'absolute',
          left: 0,
          right: 0,
          height: 56,
          marginHorizontal: 60,
          borderRadius: 30,
        }}>
        <Text
          style={{
            textAlignVertical: 'center',
            textAlign: 'center',
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          VERIFY AGAIN
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default FaceVerification;
