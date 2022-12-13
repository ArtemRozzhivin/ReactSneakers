import { Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import CartItemSneakers from './components/CartItemSneakers';
import Header from './components/Header';
import ItemSneakers from './components/ItemSneakers';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Purchase from './pages/Purchase';
import Button from './ui/Button';
import Input from './ui/Input';

const App = () => {
  return (
    <div className="bg-white rounded-lg md:w-wrapper mx-auto shadow-lg">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/purchase" element={<Purchase />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

//розложить все що можна на компоненти
//подключить реакт роутер
// подключить редакс
// доробить верстку
