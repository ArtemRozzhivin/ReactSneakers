import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Purchase from './pages/Purchase';
import Favorits from './pages/Favorits';
import Provider from 'react-redux/es/components/Provider';
import { store } from './redux/store';
import { useSelector } from 'react-redux';
import { selectCartItems } from './redux/slices/cartSlice';

const App = () => {
  return (
    <Provider store={store}>
      <div className="bg-white rounded-lg md:w-wrapper mx-auto my-10 shadow-lg">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/liked" element={<Favorits />} />
          </Route>
        </Routes>
      </div>
    </Provider>
  );
};

export default App;

// connect react-motion
//при перезапуску зробити так, щоб корзина не видалялась
// додати інпуту швидке видалення тексту
// скелетон на ітем
//додати

// Верстка:
//  - анімації
// - адаптив;
