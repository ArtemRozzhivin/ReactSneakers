import React from 'react';
import CartPurchase from '../components/Cart';
import ItemList from '../components/ItemList';
import ItemSneakers from '../components/ItemSneakers';
import Search from '../components/Search';
import Input from '../ui/Input';

const Home: React.FC = () => {
  return (
    <div className="p-10">
      <div className="flex justify-between mb-10">
        <h4 className="font-bold text-3xl leading-10">Всі кросівкі</h4>

        <Search />
      </div>

      <ItemList />
    </div>
  );
};

export default Home;
