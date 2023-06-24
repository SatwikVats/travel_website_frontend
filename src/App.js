import { Route, Routes } from 'react-router-dom';

import { Home, SingleHotel, SearchResult } from './pages';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/hotels/:name/:address/:id/reserve" element={<SingleHotel />}/>
      <Route path="/hotels/:address" element={<SearchResult />}/>
    </Routes>
  );
}

export default App;
