import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Purchase from './pages/Purchase';
import Marks from './pages/Marks';
import Provider from 'react-redux/es/components/Provider';
import { store } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="bg-white rounded-lg md:w-wrapper mx-auto shadow-lg">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {/* <Route path="/cart" element={<Cart />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/liked" element={<Marks />} />
          </Route>
        </Routes>
      </div>
    </Provider>
  );
};

export default App;

//зробити оформлення замовлення

//зробити лайкнуті і додавання туди піцц
