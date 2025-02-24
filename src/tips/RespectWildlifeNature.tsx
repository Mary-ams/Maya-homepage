import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RespectWildlifeNature: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Respect Local Wildlife and Nature / prakruti aani praani</Text>
      <Text style={styles.content}>
        Show respect to local wildlife and nature.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default RespectWildlifeNature;