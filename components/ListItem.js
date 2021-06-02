import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import AppButton from './AppButton';

const ListItem = ({
  item,
  deleteItem,
  editItem,
  isEditing,
  editItemDetail,
  saveEditItem,
  handleEditChange,
  itemChecked,
  checkedItems,
}) => {
  const checked = checkedItems.filter(
    checkedItem => checkedItem.id === item.id,
  );
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        {isEditing && editItemDetail.id === item.id ? (
          <TextInput
            placeholder="Edit Item..."
            style={styles.editItemInput}
            onChangeText={handleEditChange}
          />
        ) : (
          <Text
            onPress={() => itemChecked(item.id, item.text)}
            style={
              checked.length ? styles.checkedItemText : styles.listItemText
            }>
            {item.text}
          </Text>
        )}
        <View style={styles.iconView}>
          {isEditing && editItemDetail.id === item.id ? (
            <AppButton
              title="Save"
              onPress={() => saveEditItem(item.id, item.text)}
            />
          ) : (
            !checked.length && (
              <AppButton
                title="Edit"
                onPress={() => editItem(item.id, item.text)}
              />
            )
          )}
          <AppButton title="Delete" onPress={() => deleteItem(item.id)} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 120,
  },
});

export default ListItem;
