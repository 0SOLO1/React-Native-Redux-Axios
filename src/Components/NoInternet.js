import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';

const {width} = Dimensions.get('window');

const NoInternet = () => {
  const netInfo = useNetInfo();
  const {theme} = useTheme();
  if (!netInfo.isConnected) {
    return (
      <View style={styles.layout}>
        <View style={styles.content}>
          <Text style={[styles.title, {color: theme.color}]}>No Internet</Text>
          <Text style={{color: theme.color}}>Please check your connection</Text>
        </View>
      </View>
    );
  }
  return null;
};

export default NoInternet;

export const NoInternetToast = () => {
  const netInfo = useNetInfo();
  if (!netInfo.isConnected) {
    return (
      <View style={styles.offlineContainer}>
        <Text style={styles.offlineText}>No Internet Connection</Text>
      </View>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  layout: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    marginBottom: 10,
  },
  offlineContainer: {
    backgroundColor: '#d70015',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
    position: 'absolute',
    bottom: 0,
    zIndex: 10,
  },
  offlineText: {fontSize: 11, color: '#fff'},
});
