import {
  View,
  StyleSheet,
  ActivityIndicator,
  Modal,
  TouchableOpacity,
  Text,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {moderateScale, scale} from '../Screens/responsiveSize';

const DeleteMessage = ({Show, Cancle=(()=>{}), Delete=(()=>{})}) => {

  
  return (
    <Modal transparent={true} animationType="none" visible={Show}>
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          opacity: 10,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={style.popUpCard}>
          <Text style={style.headerText}>
            Are you sure you want to delete this item...?
          </Text>
          <View style={style.buttonItem}>
            <TouchableOpacity
              onPress={() => {
                Cancle(false)
              }}
              style={[
                style.button,
              ]}>
              <Text style={{color: '#000'}}>Cancle</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Delete()
              }}
              style={[
                style.button,
                {backgroundColor: 'red'}
              ]}>
              <Text style={{color: '#fff'}}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  mainCotainer: {},
  popUpCard: {
    width: '80%',
    padding: moderateScale(10),
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  headerText: {
    fontSize: scale(15),
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: moderateScale(10),
    color: '#000',
  },
  buttonItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: moderateScale(10),
    marginHorizontal: moderateScale(20),
  },
  button: {
    paddingHorizontal: moderateScale(30),
    paddingVertical: moderateScale(10),
    borderRadius: moderateScale(17),
    borderWidth: 1,
  },
});

export default DeleteMessage;
