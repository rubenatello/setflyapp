// components/ThemedText.tsx
import Colors from '@/constants/Colors';
import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';

type ThemeTextProps = TextProps & {
  type?: 'default' | 'title' | 'subtitle' | 'accent';
};

export function ThemedText({ type = 'default', style, ...rest }: ThemeTextProps) {
  let textStyle: TextStyle = { color: Colors.text, fontSize: 16 };

  if (type === 'title') {
    textStyle = { color: Colors.text, fontSize: 24, fontWeight: 'bold' };
  } else if (type === 'subtitle') {
    textStyle = { color: Colors.text, fontSize: 18, fontWeight: '600' };
  } else if (type === 'accent') {
    textStyle = { color: Colors.accent, fontSize: 16, fontWeight: 'bold' };
  }

  return (
    <Text
      {...rest}
      style={[textStyle, style]}
    />
  );
}
