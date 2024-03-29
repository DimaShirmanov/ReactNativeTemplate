import * as React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

interface Props {
  children: React.ReactNode;
}

export const Container: React.FC<Props> = ({children}) => (
  <SafeAreaView className="flex-1 bg-white">{children}</SafeAreaView>
);
