import * as React from 'react';
import {withProviders} from './providers';
import {AppNavigation} from './navigation';

export const App = () => withProviders(<AppNavigation />);
