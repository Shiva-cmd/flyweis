/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Check from 'react-native-vector-icons/AntDesign';

import Update from 'react-native-vector-icons/Ionicons';
import {CommonActions} from '@react-navigation/native';
const Chatprice = props => {
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
          }}>
          <Text
            style={{
              fontSize: 20,

              textAlignVertical: 'center',
            }}>
            My Chat Price
          </Text>
        </View>
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 32}}>
        <Image
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
          style={{width: 180, height: 150, borderRadius: 20}}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          marginTop: 16,
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
          Present Price : 2000{' '}
        </Text>
        <Icon name="diamond" size={28} color="gold" style={{}} />
        <Text style={{fontSize: 18, fontWeight: 'bold'}}> /min </Text>
        <Update name="pencil-outline" size={28} color="#E1306C"/>
      </View>

      <View
        style={{
          backgroundColor: '#dcdcdc',
          marginHorizontal: 16,
          borderRadius: 12,
          padding: 12,
          marginTop: 16,
        }}>
        <Text style={{padding: 4, fontSize: 18, fontWeight: 'bold'}}>
          Price Adjustment Rule
        </Text>
        <Text style={{fontWeight: '400', fontSize: 16}}>
          1. n territory which the French had denuded of food. They escaped by
          fighting their way across the Somme against a French blocking ir
        </Text>
        <Text style={{fontWeight: '400', fontSize: 16, marginTop: 12}}>
          2. n territory which the French had denuded of food. They escaped by
          fighting their way across the Somme against a French blocking ir
        </Text>
        <Text style={{fontWeight: '400', fontSize: 16, marginTop: 12}}>
          3. n territory which the French had denuded of food. They escaped by
          fighting their way across the Somme against a French blocking ir
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default Chatprice;
