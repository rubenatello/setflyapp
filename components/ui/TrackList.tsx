import { ThemedText } from '@/components/ThemedText';
import { Track } from '@/store/tracks';
import { FlatList, ViewStyle } from 'react-native';
import TrackRow from './TrackRow';

export type SortKey = 'title' | 'bpm' | 'key' | 'timeSig';

type Props = {
  tracks: Track[];
  searchQuery?: string;
  sortBy?: SortKey;
  style?: ViewStyle;
};

export default function TrackList({
  tracks,
  searchQuery,
  sortBy = 'title',
  style,
}: Props) {
  let visible = [...tracks];

  /* --- filter --- */
  if (searchQuery?.trim()) {
    const q = searchQuery.toLowerCase();
    visible = visible.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.key.toLowerCase().includes(q) ||
        t.timeSig.toLowerCase().includes(q)
    );
  }

  /* --- sort --- */
  visible.sort((a, b) => {
    const av = a[sortBy];
    const bv = b[sortBy];
    if (typeof av === 'number' && typeof bv === 'number') return av - bv;
    return String(av).localeCompare(String(bv));
  });

  if (visible.length === 0) {
    return (
      <ThemedText style={{ textAlign: 'center', marginTop: 24 }}>
        No tracks found.
      </ThemedText>
    );
  }

  return (
    <FlatList
      style={style}
      data={visible}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TrackRow track={item} />}
    />
  );
}
