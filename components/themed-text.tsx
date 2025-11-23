import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

type TextType = 'title' | 'body' | 'link';

interface ThemedTextProps extends TextProps {
  type?: TextType;
}

export const ThemedText: React.FC<ThemedTextProps> = ({ type = 'body', style, children, ...props }) => {
  let textStyle;
  switch (type) {
    case 'title': textStyle = styles.title; break;
    case 'link': textStyle = styles.link; break;
    default: textStyle = styles.body; break;
  }
  return <Text style={[textStyle, style]} {...props}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: { fontSize: 28, fontWeight: '700', marginBottom: 20 },
  body: { fontSize: 16 },
  link: { fontSize: 16, color: '#00796B', textDecorationLine: 'underline' },
});
