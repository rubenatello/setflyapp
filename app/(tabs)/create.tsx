// app/(tabs)/create.tsx
import { ThemedView } from '@/components/ThemedView';
import TrackList from '@/components/ui/TrackList';
import TrackListControls from '@/components/ui/TrackListControl';
import TrackRow from '@/components/ui/TrackRow';
import { useTracksStore } from '@/store/tracks';
import { useRouter, type Href } from 'expo-router';
import { useMemo, useState } from 'react';

export default function Create() {
  const tracks = useTracksStore((s) => s.tracks);
  const add    = useTracksStore((s) => s.addTrack);
  const nav    = useRouter();

  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<'title' | 'bpm' | 'key' | 'timeSig'>(
    'title'
  );

  /* --- derive visible list --- */
  const visibleTracks = useMemo(() => {
    let list = [...tracks];

    /* filter */
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        t =>
          t.title.toLowerCase().includes(q) ||
          t.key.toLowerCase().includes(q) ||
          t.timeSig.toLowerCase().includes(q)
      );
    }

    /* sort */
    list.sort((a, b) => {
      const av = a[sortBy] as any;
      const bv = b[sortBy] as any;
      return typeof av === 'number'
        ? av - bv
        : String(av).localeCompare(String(bv));
    });

    return list;
  }, [tracks, search, sortBy]);

  const handleAdd = () => {
    const id = add();
    setSearch('');
    nav.push({ pathname: '/track/[id]', params: { id } } as Href<'/track/[id]'>);
  };

  return (
    <ThemedView style={{ flex: 1, padding: 16 }}>
      {/* New-track card */}
      <TrackRow
        title="＋  New Track"
        subtitle="Choose key, tempo & time-sig"
        onPress={handleAdd}
        style={{ backgroundColor: '#007AFF', marginBottom: 12 }}
      />

      {/* search + sort UI */}
      <TrackListControls
        search={search}
        onSearch={setSearch}
        sortBy={sortBy}
        onSort={setSortBy}
      />

      {/* list */}
      <TrackList tracks={visibleTracks} style={{ marginTop: 12 }} />
    </ThemedView>
  );
}