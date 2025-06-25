// app/(tabs)/create.tsx
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import TrackRow from '@/components/ui/TrackRow';
import { useTracksStore } from '@/store/tracks';
import { useRouter, type Href } from 'expo-router';

export default function Create() {
  const tracks   = useTracksStore((s) => s.tracks);
  const addTrack = useTracksStore((s) => s.addTrack);
  const nav      = useRouter();

  /* -------- handler for the "New Track" row -------- */
  const handleAdd = () => {
    const id = addTrack();                                         // 1. create
    nav.push({ pathname: '/track/[id]', params: { id } } as Href<'/track/[id]'>);
  };

  return (
    <ThemedView style={{ flex: 1, padding: 16 }}>
      {/* optional empty-state text */}
      {tracks.length === 0 && (
        <ThemedText style={{ textAlign: 'center', marginBottom: 12 }}>
          No tracks yet. Tap “New Track” below to get started!
        </ThemedText>
      )}

      {/* ➕ Add-new row (styled variant) */}
      <TrackRow
        title="＋  New Track"
        subtitle="Choose your key, tempo and time signature"
        onPress={handleAdd}
        style={{
          backgroundColor: '#007AFF',
          borderWidth: 1,
          borderColor: '#37f',
        }}
      />

      {/* Existing tracks */}
      {tracks.map((t) => (
        <TrackRow
          key={t.id}
          title={t.title}
          subtitle={`${t.bpm} BPM · ${t.key} · ${t.timeSig}`}
          onPress={() =>
            nav.push({ pathname: '/track/[id]', params: { id: t.id } } as Href<'/track/[id]'>)
          }
        />
      ))}
    </ThemedView>
  );
}
