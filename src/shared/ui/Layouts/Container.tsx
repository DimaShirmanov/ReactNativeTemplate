import * as React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

interface Props {
  children: React.ReactNode;
}

export const Container = ({children}: Props) => (
  <SafeAreaView className="flex-1">{children}</SafeAreaView>
);
