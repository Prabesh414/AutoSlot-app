import React from 'react';
import { View, ViewProps } from 'react-native';

export const ThemedView: React.FC<ViewProps> = ({ children, style, ...props }) => {
  return <View style={style} {...props}>{children}</View>;
};
