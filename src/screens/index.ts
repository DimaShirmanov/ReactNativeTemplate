import * as React from 'react';
import {ExampleScreen} from './ExampleScreen';
import {ScreenRoutes} from 'shared/config';

export const Screens = new Map<ScreenRoutes, React.FC>();

Screens.set(ScreenRoutes.Example, ExampleScreen);
