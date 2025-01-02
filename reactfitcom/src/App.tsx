import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import DetailsBarang from './pages/DetailsBarang'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/barang/:slug' element={< DetailsBarang/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
