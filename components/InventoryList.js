import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getInventories } from './InventoryService';

export const InventoryList = () => {
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    const fetchInventories = async () => {
      const inventoryList = await getInventories();
      setInventories(inventoryList);
    };

    fetchInventories();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={inventorys}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name} - {item.quantity}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f8f8f8'
  },
  item: {
    padding: 10,
    fontSize: 18,
  },
});

export default InventoryList;