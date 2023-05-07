import * as React from 'react';
import {Text, View} from 'react-native';
import * as UI from 'shared/ui';

export const ExampleScreen = () => (
  <UI.Container>
    <View className="bg-neutral-300 dark:bg-slate-900 flex-1 items-center justify-center">
      <Text className="font-bold">I'm example secreen</Text>
    </View>
  </UI.Container>
);
