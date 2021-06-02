import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import AppButton from './AppButton';

const AddItem = ({title, addItem}) => {
  const [text, setText] = useState('');
  const onChange = textValue => setText(textValue);
  return (
    <View>
      <TextInput
        placeholder="Add item... "
        style={styles.input}
        onChangeText={onChange}
      />
      <AppButton title="Add" onPress={() => addItem(text)} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    margin: 5,
  },
});

export default AddItem;
