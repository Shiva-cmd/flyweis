import React from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Question from 'react-native-vector-icons/AntDesign';
import Camera from 'react-native-vector-icons/AntDesign';
import {CommonActions} from '@react-navigation/native';

const EditProfile = ({itemLeft, itemRight}) => {
  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{padding: 12}}>
          <Text style={{fontWeight: '800', fontSize: 16}}>{itemLeft}</Text>
        </View>
        <View
          style={{
            padding: 10,

            marginLeft: 20,
            flex: 1,
          }}>
          <Text style={{fontSize: 14, textAlign: 'right'}}>{itemRight}</Text>
        </View>

        <Icon
          name="chevron-right"
          size={40}
          style={{marginTop: 4}}
          onPress={() => props.navigation.dispatch(CommonActions.goBack())}
        />
      </View>
      <View
        style={{borderWidth: 0.7, borderColor: 'grey', marginHorizontal: 10}}
      />
    </View>
  );
};
export default EditProfile;
