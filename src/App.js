import { Route, Routes } from 'react-router-dom';

import { Home, SingleHotel, SearchResult } from './pages';
import { Filter } from './components';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/hotels/:name/:address/:id/reserve" element={<SingleHotel />}/>
      <Route path="/hotels/:address" element={<SearchResult />}/>
      <Route path="/hotels/filter" element={<Filter/>}/>
    </Routes>
  );
}

export default App;
