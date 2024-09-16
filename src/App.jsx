
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddedCarts from './components/AddedCarts';
import Home from './components/Home';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carts" element={<AddedCarts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

