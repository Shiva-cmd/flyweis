/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
const List = ({ item, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.constainer}>
                <View>
                    <Text style={styles.text}>{item}</Text>
                </View>
                <View style={styles.icon}>
                    <Icon name="chevron-right" size={40} color="black" />
                </View>
            </View>
        </TouchableOpacity >
    );
};
export default List;

const styles = StyleSheet.create({
    constainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#dcdcdc',
        marginHorizontal: 12,
        marginTop: 16,
        borderRadius: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: '600',
        padding: 12,
    },
    icon: {
        position: 'absolute',
        right: 0,
        top: 8,
    },
});
