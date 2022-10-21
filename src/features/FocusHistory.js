import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { fontSize, spacing } from '../utils/sizes';
export const FocusHistory = ({history}) => {
  if(!history || !history.length) return <Text style={styles.title}>We haven't focused on anything yet</Text>;
  const renderItem = ({item}) => <Text style={styles.item}>- {item}</Text>
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on:</Text>
      <FlatList 
        data={history}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  item: {
    color: colors.white,
    fontSize: fontSize.md,
    paddingTop: spacing.sm
  }, 
  title: {
    color: colors.white,
    fontSize: fontSize.md,
    fontWeight: 'bold'
  }
})