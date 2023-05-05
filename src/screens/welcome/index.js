import React from 'react';
import {View, Text, Alert} from 'react-native';
import {Button} from '../../components';

import styles from './style';

function Welcome() {
  const onPressButton = () => {
    Alert.alert('Welcome');
  };
  return (
    <View style={styles.container}>
      <Button onPress={() => onPressButton()}>
        <Text style={styles.textStyle}>Welcome</Text>
      </Button>
    </View>
  );
}

export default Welcome;
