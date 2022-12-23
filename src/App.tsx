import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Purchase from './pages/Purchase';
import Favorits from './pages/Favorits';
import Provider from 'react-redux/es/components/Provider';
import { store } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="bg-white rounded-lg md:w-wrapper mx-auto shadow-lg">
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

//зробити оформлення замовлення: clear cart при оформленні
//зробити сортування
//доробити снікерсІтем
//зробити лайкнуті і додавання туди піцц
// зробити сторінку .купляні.
// скелетон на ітем
// зробити, при відкритій корзині її закриття по натисканню на сіру зону

// Верстка:
//  - анімації
// - адаптив;
