import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './style';

function Button(props) {
  const {buttonStyle, onPress, children} = props;
  return (
    <TouchableOpacity
      {...props}
      onPress={onPress}
      style={[styles.container, buttonStyle]}>
      {children}
    </TouchableOpacity>
  );
}

export default Button;
