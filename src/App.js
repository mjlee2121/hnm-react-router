import './App.css';
import { Routes, Route} from 'react-router-dom'
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';

function App() {
  return (
    <div className="App">
      <h1> Landing page </h1>
      <Routes>
        <Route page='/' element={<ProductAll />} />
        <Route page='/login' element={<Login /> } />
        <Route page='/product/:id' element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
