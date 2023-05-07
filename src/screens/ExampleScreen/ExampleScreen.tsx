import * as React from 'react';
import {reflect} from '@effector/reflect';
import * as UI from 'shared/ui';
import * as counterModel from 'entities/counter';
import {View} from 'react-native';

interface Props {
  counter: number;
  counterUpdate: () => void;
}

export const ExampleView: React.FC<Props> = ({counter, counterUpdate}) => (
  <UI.Container>
    <View className="flex-1 justify-center items-center">
      <UI.Typography>Counter: {counter}</UI.Typography>
      <UI.Button onPress={counterUpdate} title="Update" />
    </View>
  </UI.Container>
);

export const ExampleScreen = reflect({
  view: ExampleView,
  bind: {
    counter: counterModel.$counter,
    counterUpdate: counterModel.counterUpdate,
  },
});
