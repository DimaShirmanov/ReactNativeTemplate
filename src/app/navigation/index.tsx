import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Root} from './navigators';

export const AppNavigation = () => (
  <NavigationContainer>
    <Root />
  </NavigationContainer>
);
