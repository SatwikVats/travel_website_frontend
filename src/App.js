import { Route, Routes } from 'react-router-dom';

import { Home, singleHotel } from './pages';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/hotels/:name/:address/:id/reserve" element={<singleHotel />}/>
    </Routes>
  );
}

export default App;
