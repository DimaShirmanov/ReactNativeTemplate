import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';

export const withGestureHandler = (Component: React.ReactNode) => (
  <GestureHandlerRootView style={styles.container}>
    {Component}
  </GestureHandlerRootView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
