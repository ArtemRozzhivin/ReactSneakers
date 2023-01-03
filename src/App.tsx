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
      <div className="bg-white rounded-lg mx-auto shadow-lg lg:my-5 lg:w-wrapper">
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

// Верстка:
//  - анімації
// - адаптив;
