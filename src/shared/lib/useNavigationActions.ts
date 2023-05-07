import {
  useNavigation,
  CommonActions,
  StackActions,
} from '@react-navigation/native';
import {ScreenRoutes, NavigatorRoutes} from '../config';

export function useNavigationActions() {
  const navigation = useNavigation();

  function goToMain() {
    navigation.dispatch(StackActions.replace(NavigatorRoutes.Main));
  }

  function resetMain() {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {
            name: NavigatorRoutes.Main,
            state: {
              routes: [
                {
                  name: ScreenRoutes.Example,
                },
              ],
            },
          },
        ],
      }),
    );
  }

  return {
    goToMain,
    resetMain,
    goTo: navigation.navigate,
    goBack: navigation.goBack,
  };
}
