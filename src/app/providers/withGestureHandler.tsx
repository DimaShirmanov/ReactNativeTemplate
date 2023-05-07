import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export const withGestureHandler = (Component: React.ReactNode) => (
  <GestureHandlerRootView className="flex-1">
    {Component}
  </GestureHandlerRootView>
);
