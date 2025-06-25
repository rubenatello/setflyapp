export function getSecondsPerBeat(bpm: number): number {
  return 60 / bpm;
}

export function getBeatsPerBar(timeSigTop: number): number {
  return timeSigTop; // e.g. 4 for 4/4, 3 for 3/4
}

export function getBarLengthSeconds(bpm: number, timeSigTop: number): number {
  const secondsPerBeat = getSecondsPerBeat(bpm);
  const beatsPerBar = getBeatsPerBar(timeSigTop);
  return beatsPerBar * secondsPerBeat;
}
