import React from 'react';
import {TouchableOpacity} from 'react-native';
import {TouchableOpacityProps} from 'react-native';
import {Typography} from '../Font';

export interface ButtonProps {
  title: string;
  disabled?: boolean;
}

export const Button = (props: ButtonProps & TouchableOpacityProps) => (
  <TouchableOpacity
    className="items-center justify-center w-[100%]"
    disabled={props.disabled}
    activeOpacity={0.8}
    {...props}>
    <Typography>{props.title}</Typography>
  </TouchableOpacity>
);
