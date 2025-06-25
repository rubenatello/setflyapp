// components/ui/TrackListControls.tsx
import { View, TextInput, Pressable, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { SortKey } from './TrackList';

type Props = {
  search: string;
  onSearch: (q: string) => void;
  sortBy: SortKey;
  onSort: (k: SortKey) => void;
};

export default function TrackListControls({
  search,
  onSearch,
  sortBy,
  onSort,
}: Props) {
  return (
    <View style={styles.bar}>
      <TextInput
        placeholder="Search…"
        placeholderTextColor="#888"
        value={search}
        onChangeText={onSearch}
        style={styles.search}
      />

      {(['title', 'bpm', 'key', 'timeSig'] as SortKey[]).map((k) => (
        <Pressable
          key={k}
          onPress={() => onSort(k)}
          style={[styles.btn, sortBy === k && styles.active]}
        >
          <ThemedText style={styles.btnText}>{k}</ThemedText>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  /* no wrap ⇒ stays 1 row */
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  /* minWidth:0 lets it shrink on small screens */
  search: {
    flex: 1,
    minWidth: 0,
    padding: 8,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 6,
    color: '#fff',
    marginRight: 6,
  },
  btn: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#555',
    marginLeft: 4,
  },
  active: { backgroundColor: '#555' },
  btnText: { fontSize: 12, textTransform: 'capitalize' },
});
