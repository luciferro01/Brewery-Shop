import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const DetailsScreen = ({navigation, route}: any) => {
  // console.log(useRoute().params);
  console.log(route.params);
  return (
    <View>
      <Text>DetailsScreen</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
