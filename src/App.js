import './App.css';
import { Routes, Route} from 'react-router-dom'
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <h1> Landing page </h1>
      <Navbar />
      <Routes>
        <Route path='/product' element={<ProductAll />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
