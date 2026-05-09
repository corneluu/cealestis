export interface HistoryItem {
  name: string;
  url: string;
  date: string;
  change: string;
}

export interface UpdateHistory {
  lastUpdate: string;
  pdfs: HistoryItem[];
  audio: HistoryItem[];
}

export const updateHistory: UpdateHistory = {
  lastUpdate: '9 mai 2026',
  pdfs: [
    { 
      name: 'Eu te iubesc, Doamne', 
      url: 'pdfs/cantec-13/partitura.pdf', 
      date: '9 mai 2026', 
      change: 'Partitură actualizată' 
    }
  ],
  audio: [
    { 
      name: 'La pace verrà (Alto)', 
      url: 'audio/cantec-9/alto.mp3', 
      date: '9 mai 2026', 
      change: 'Audio actualizat' 
    },
    { 
      name: 'La pace verrà (Sopran)', 
      url: 'audio/cantec-9/sopran.mp3', 
      date: '9 mai 2026', 
      change: 'Audio actualizat' 
    }
  ]
};
