// components/ThemedView.tsx
import Colors from '@/constants/Colors';
import React from 'react';
import { View, ViewProps } from 'react-native';

export function ThemedView(props: ViewProps) {
  return (
    <View
      {...props}
      style={[
        { backgroundColor: Colors.background },
        props.style,
      ]}
    />
  );
}
