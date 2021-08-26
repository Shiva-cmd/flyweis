/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Question from 'react-native-vector-icons/AntDesign';
import Camera from 'react-native-vector-icons/AntDesign';
import {CommonActions} from '@react-navigation/native';
import EditProfile from '../components/editProfilelist';
const Editprofile = props => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#dcdcdc'}}>
      <View style={{backgroundColor: 'white'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',

            height: 44,
          }}>
          <View style={{position: 'absolute', left: 0, top: 8}}>
            <Icon
              name="chevron-left"
              size={40}
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

                textAlignVertical: 'center',
              }}>
              Edit Profile
            </Text>
          </View>
          <View style={{position: 'absolute', right: 10, top: 12}}>
            <Question name="questioncircle" size={28} />
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 24,
            marginBottom: 20,
          }}>
          <Image
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
            style={{width: 110, height: 110, borderRadius: 55}}
          />
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: 'red',

              alignContent: 'center',
              backgroundColor: 'red',
            }}>
            <Camera
              name="camera"
              size={28}
              style={{
                position: 'absolute',
                backgroundColor: 'yellow',
                height: 28,
                width: 28,
                borderRadius: 14,
                bottom: 1,
                left: 4,
              }}
            />
          </View>
        </View>
      </View>
      <View style={{backgroundColor: 'white', marginTop: 10}}>
        <EditProfile itemLeft="Username" itemRight="xyz" />
        <EditProfile itemLeft="Gender" itemRight="male" />
        <EditProfile itemLeft="Date" itemRight="date" />
        <EditProfile itemLeft="Country" itemRight="country" />
        <EditProfile itemLeft="Bio" itemRight="xyz" />
      </View>
      <View style={{backgroundColor: 'white', marginTop: 10}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{padding: 12, flexDirection: 'row'}}>
            <Question name="questioncircle" size={20} />
            <View style={{marginLeft: 12}}>
              <Text style={{fontWeight: '800', fontSize: 16}}>Tag</Text>
            </View>
          </View>

          <Icon
            name="chevron-right"
            size={40}
            style={{marginTop: 4}}
            onPress={() => props.navigation.dispatch(CommonActions.goBack())}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Editprofile;
