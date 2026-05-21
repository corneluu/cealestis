export type Lang = 'RO' | 'EN' | 'IT' | 'LA';
export type Voice = 'sopran' | 'alto' | 'tenor' | 'bas';

export interface Song {
  id: string;
  title: string;
  composer: string;
  lang: Lang;
  voices: Voice[];
  hasScore: boolean;
  audioExt?: string; // optional, defaults to 'mp3'. Use 'wav', 'ogg', 'aac', etc.
  youtubeUrl?: string;
  audioUrl?: string;
}

export const songs: Song[] = [
  { id: 'cantec-1', title: "Cântec 1", composer: '', lang: 'RO', hasScore: true, voices: ['sopran', 'alto', 'tenor', 'bas'] },
  { id: 'cantec-2', title: 'Cântec 2', composer: '', lang: 'RO', hasScore: true, voices: ['sopran', 'alto', 'tenor', 'bas'] },
  { id: 'cantec-3', title: 'Cântec 3', composer: '', lang: 'RO', hasScore: true, voices: ['sopran', 'alto', 'tenor', 'bas'] },
  { id: 'cantec-4', title: 'Cântec 4', composer: '', lang: 'RO', hasScore: true, voices: ['sopran', 'alto', 'tenor', 'bas'] },
  { id: 'cantec-5', title: 'Cântec 5', composer: '', lang: 'RO', hasScore: true, voices: ['sopran', 'alto', 'tenor', 'bas'] },
  { id: 'cantec-6', title: 'Cântec 6', composer: '', lang: 'RO', hasScore: true, voices: ['sopran', 'alto', 'tenor', 'bas'] },
  { id: 'cantec-7', title: 'Cântec 7', composer: '', lang: 'RO', hasScore: true, voices: ['sopran', 'alto', 'tenor', 'bas'] },
  { id: 'cantec-8', title: 'Cântec 8', composer: '', lang: 'RO', hasScore: true, voices: ['sopran', 'alto', 'tenor', 'bas'] },
  { id: 'cantec-9', title: 'Cântec 9', composer: '', lang: 'RO', hasScore: true, voices: ['sopran', 'alto', 'tenor', 'bas'] },
  { id: 'cantec-10', title: 'Cântec 10', composer: '', lang: 'RO', hasScore: true, voices: ['sopran', 'alto', 'tenor', 'bas'] },
  { id: 'cantec-11', title: 'Cântec 11', composer: '', lang: 'RO', hasScore: true, voices: ['sopran', 'alto', 'tenor', 'bas'] },
  { id: 'cantec-12', title: 'Cântec 12', composer: '', lang: 'RO', hasScore: true, voices: ['sopran', 'alto', 'tenor', 'bas'] },
  { id: 'cantec-13', title: 'Cântec 13', composer: '', lang: 'RO', hasScore: true, voices: ['sopran', 'alto', 'tenor', 'bas'] },
  { id: 'cantec-14', title: 'Cântec 14', composer: '', lang: 'RO', hasScore: true, voices: ['sopran', 'alto', 'tenor', 'bas'] }
];
