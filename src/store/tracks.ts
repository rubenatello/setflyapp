// src/store/tracks.ts

import { nanoid } from 'nanoid';
import { create } from 'zustand';

export type Track = {
  id: string;
  title: string;
  bpm: number;
  key: string;
  timeSig: string;
};

type Store = {
  tracks: Track[];
  addTrack: (partial?: Partial<Track>) => string;
};

export const useTracksStore = create<Store>((set) => ({
  tracks: [],
  addTrack: (partial = {}) => {
    const id = nanoid();
    const newTrack: Track = {
      id,
      title: partial.title ?? `Untitled ${id.slice(0, 4)}`,
      bpm: partial.bpm ?? 120,
      key: partial.key ?? 'C',
      timeSig: partial.timeSig ?? '4/4',
    };
    set((s) => ({ tracks: [...s.tracks, newTrack] }));
    return id;
  },
}));
