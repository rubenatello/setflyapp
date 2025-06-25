import { ThemedText } from '@/components/ThemedText';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';

type Props = {
  title: string;
  subtitle?: string;
  onPress: () => void;
  style?: ViewStyle;
};

export default function TrackRow({ title, subtitle, onPress, style }: Props) {
  return (
    <Pressable style={[styles.row, style]} onPress={onPress}>
      <ThemedText type="subtitle">{title}</ThemedText>
      {subtitle && (
        <ThemedText style={{ fontSize: 12, color: '#aaa' }}>
          {subtitle}
        </ThemedText>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: '#2223',
  },
});
