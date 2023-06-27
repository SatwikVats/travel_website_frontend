import { Route, Routes } from 'react-router-dom';

import { Home, SingleHotel, SearchResult, Wishlist, Payment } from './pages';
import { Filter } from './components';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/hotels/:name/:address/:id/reserve" element={<SingleHotel />}/>
      <Route path="/hotels/:address" element={<SearchResult />}/>
      <Route path="/hotels/filter" element={<Filter/>}/>
      <Route path="/wishlist" element={<Wishlist/>}/>
      <Route path="/confirm-booking/stay/:id" element={<Payment/>}/>
    </Routes>
  );
}

export default App;
