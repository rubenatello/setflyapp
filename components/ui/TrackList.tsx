// components/ui/TrackList.tsx
import { ThemedText } from '@/components/ThemedText';
import { Track } from '@/store/tracks';
import { FlatList, ViewStyle } from 'react-native';
import TrackRow from './TrackRow';
import { useRouter, type Href } from 'expo-router';

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
  const router = useRouter();

  /* ---- build visible list ---- */
  let visible = [...tracks];

  /* filter */
  if (searchQuery?.trim()) {
    const q = searchQuery.toLowerCase();
    visible = visible.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.key.toLowerCase().includes(q) ||
        t.timeSig.toLowerCase().includes(q)
    );
  }

  /* sort */
  visible.sort((a, b) => {
    const av = a[sortBy];
    const bv = b[sortBy];
    if (typeof av === 'number' && typeof bv === 'number') return av - bv;
    return String(av).localeCompare(String(bv));
  });

  /* empty state */
  if (visible.length === 0) {
    return (
      <ThemedText style={{ textAlign: 'center', marginTop: 24 }}>
        No tracks found.
      </ThemedText>
    );
  }

  /* renderer */
  return (
    <FlatList
      style={style}
      data={visible}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TrackRow
          title={item.title}
          subtitle={`${item.bpm} BPM · ${item.key} · ${item.timeSig}`}
          onPress={() =>
            router.push(
              { pathname: '/track/[id]', params: { id: item.id } } as Href<'/track/[id]'>
            )
          }
        />
      )}
    />
  );
}
