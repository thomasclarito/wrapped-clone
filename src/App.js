import React from 'react';
import './App.css';
import Wrapped from './components/Wrapped';

// Mock data
const mockData = {
  topArtists: ['Artist 1', 'Artist 2', 'Artist 3'],
  topSongs: ['Song 1', 'Song 2', 'Song 3'],
  totalMinutes: 12345,
  topGenre: 'Pop',
  genres: { Pop: 40, Rock: 30, HipHop: 20, Other: 10 }
};

function App() {
  return (
    <div className="App">
      <Wrapped data={mockData} />
    </div>
  );
}

export default App;