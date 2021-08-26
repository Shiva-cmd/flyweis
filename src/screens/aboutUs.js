/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Check from 'react-native-vector-icons/AntDesign';
import {CommonActions} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import List from '../components/list';
const Aboutus = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',

          height: 48,
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
            About us
          </Text>
        </View>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={['#E1306C', '#C13584', '#5851DB']}
          style={styles.linearGradient}>
          <Text style={{color: 'white', fontSize: 28}}>Lumi</Text>
        </LinearGradient>
      </View>
      <View style={{marginTop: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>
          Lumi
        </Text>
        <Text style={{textAlign: 'center'}}>1.0.46.11</Text>
      </View>
      <View style={{ marginTop: 20 }}>
      <List item={"Privacy Policy"} />
      <List item={"Terms of Use"}  />
      <List item={"Contact Us"} />
      
  </View>
    </SafeAreaView>
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
    borderRadius: 20,
    padding: 16,
    marginHorizontal: 52,
    marginTop: 20,
    height: 100,
    width: 100,
  },
});
export default Aboutus;
