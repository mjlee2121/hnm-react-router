import './App.css';
import { Routes, Route} from 'react-router-dom'
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route page='/' element={<ProductAll />}></Route>
        <Route page='/login' element={<Login />}></Route>
        <Route page='/product/:id' element={<ProductDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
