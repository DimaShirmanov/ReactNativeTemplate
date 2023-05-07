import compose from 'compose-function';
import {withSafeArea} from './withSafeArea';
import {withGestureHandler} from './withGestureHandler';

export const withProviders = compose(withSafeArea, withGestureHandler);
