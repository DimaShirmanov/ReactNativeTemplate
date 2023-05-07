import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScreenRoutes} from 'shared/config';
import {Screens} from 'screens';
import {configureTabOptions} from 'app/navigation/options';

const Tab = createBottomTabNavigator();

export const Main = () => (
  <Tab.Navigator>
    <Tab.Screen
      name={ScreenRoutes.Example}
      component={Screens.get(ScreenRoutes.Example)}
      options={configureTabOptions({
        title: 'Example tab',
      })}
    />
  </Tab.Navigator>
);
