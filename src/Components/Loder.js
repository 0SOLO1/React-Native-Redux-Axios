import {View, StyleSheet, ActivityIndicator, Modal} from 'react-native';
import React from 'react';

const Loder = ({Start}) => {
  return (
    <Modal transparent={true} animationType="none" visible={Start}>
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          opacity: 10,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  mainCotainer: {},
});

export default Loder;
