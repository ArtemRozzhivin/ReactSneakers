import { Routes, Route } from 'react-router-dom';
import Provider from 'react-redux/es/components/Provider';
import { store } from './redux/store';
import { Suspense } from 'react';
import { lazy } from 'react';
import Loading from './pages/Loading';

const Home = lazy(() => import('./pages/Home'));
const Purchase = lazy(() => import('./pages/Purchase'));
const MainLayout = lazy(() => import('./layouts/MainLayout'));
const Favorits = lazy(() => import('./pages/Favorits'));

const App = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loading />}>
        <div className="bg-white rounded-lg mx-auto shadow-lg lg:my-5 lg:w-wrapper">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/purchase" element={<Purchase />} />
              <Route path="/liked" element={<Favorits />} />
            </Route>
          </Routes>
        </div>
      </Suspense>
    </Provider>
  );
};

export default App;
