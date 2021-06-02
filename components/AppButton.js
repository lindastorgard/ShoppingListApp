import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const AppButton = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={['#c2bad8', 'darkslateblue']}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

TouchableOpacity.defaultProps = {activeOpacity: 0.8};

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    padding: 9,
    margin: 5,
  },
  appButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default AppButton;
