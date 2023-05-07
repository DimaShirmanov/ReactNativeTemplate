import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigatorRoutes} from 'shared/config';
import {Main} from '../Main';
import {configureOptions} from 'app/navigation/options';

const RootStack = createNativeStackNavigator();

export const Root = () => (
  <RootStack.Navigator initialRouteName={NavigatorRoutes.Main}>
    <RootStack.Screen
      name={NavigatorRoutes.Main}
      component={Main}
      options={configureOptions()}
    />
  </RootStack.Navigator>
);
