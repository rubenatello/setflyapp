import { ThemedText } from '@/components/ThemedText';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';

type Props = {
  onPress: () => void;
  /** Optional style override so parent screens decide where the FAB sits */
  style?: ViewStyle;
};

export default function FloatingAddButton({ onPress, style }: Props) {
  return (
    <Pressable style={[styles.fab, style]} onPress={onPress}>
      <ThemedText style={{ color: '#fff', fontSize: 28 }}>＋</ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    height: 56,
    width: 56,
    borderRadius: 28,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.4,
    shadowRadius: 4,
    /* ⬇️ default corner (still works for other screens) */
    bottom: 24,
    right: 24,
  },
});
