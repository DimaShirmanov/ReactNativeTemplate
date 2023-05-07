import * as React from 'react';
import {TextProps, StyleSheet, Text} from 'react-native';

interface FontProps {
  lineHeight?: number;
  children?: React.ReactNode;
  underline?: boolean;
  alignCenter?: boolean;
  textAlign?: 'left' | 'auto' | 'center' | 'right' | 'justify';
  textTransform?: 'capitalize' | 'lowercase' | 'none' | 'uppercase';
  devMode?: boolean;
}

export const Typography = (props: FontProps & TextProps) => (
  <Text adjustsFontSizeToFit {...props} style={styles.container}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  container: {
    height: 40,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});
