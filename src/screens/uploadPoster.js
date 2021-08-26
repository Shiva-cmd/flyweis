/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Check from 'react-native-vector-icons/AntDesign';

import Add from 'react-native-vector-icons/Ionicons';
import {CommonActions} from '@react-navigation/native';
const Uploadposter = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',

          height: 48,
        }}>
        <View style={{position: 'absolute', left: 10, top: 8}}>
          <Check
            name="arrowleft"
            size={32}
            onPress={() => props.navigation.dispatch(CommonActions.goBack())}
          />
        </View>

        <View
          style={{
            justifyContent: 'center',
            marginTop: 24,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              textAlignVertical: 'center',
            }}>
            Upload A Poster
          </Text>
        </View>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',

          marginTop: 20,

          alignContent: 'center',
          flex: 0.7,
          marginHorizontal: 40,
          height: '100%',
          width: '80%',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',

            backgroundColor: '#dcdcdc',
            height: '100%',
            width: '80%',
            borderRadius: 10,
            alignContent: 'center',
          }}>
          <View>
            <Add
              name="add"
              size={42}
              color="purple"
              style={{
                backgroundColor: 'white',
                height: 40,
                width: 40,
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                alignContent: 'center',
              }}
            />
          </View>
        </View>
      </View>

      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 16}}>
        {[1, 2, 3].map((key, value) => {
          return (
            <View key={key} style={{padding: 10}}>
              <Image
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
                style={{width: 70, height: 90, borderRadius: 20}}
              />
            </View>
          );
        })}
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontWeight: '600'}}>
          Please upload a <Text style={{color: 'purple'}}>clear</Text> and{' '}
          <Text style={{color: 'purple'}}>handsome</Text> photo of
          <Text style={{color: 'purple'}}> yourself</Text>
        </Text>
        <Text style={{fontWeight: '600'}}>
          ,or you will be banned from uploading a poster
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default Uploadposter;
