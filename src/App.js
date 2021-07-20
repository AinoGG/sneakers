import Card from './components/Card/Card';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';





function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);







  React.useEffect(() => {
    axios.get('https://60e6fab615387c00173e49d4.mockapi.io/items').then(res => {
      setItems(res.data);
    });
    axios.get('https://60e6fab615387c00173e49d4.mockapi.io/cart').then(res => {
      setCartItems(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://60e6fab615387c00173e49d4.mockapi.io/cart', obj);
    setCartItems(prev => [...prev, obj]);
  };

  const onRemoveToCart = (id) => {
    axios.delete(`https://60e6fab615387c00173e49d4.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const onAddToFavorite = (obj) => {
    axios.post(`https://60e6fab615387c00173e49d4.mockapi.io/favorite`, obj);
    setFavorites(prev => [...prev, obj]);
  };


  const onChangeSearchInput = (event) => {

    setSearchValue(event.target.value);
  }

  return (
    <div className="wrapper clear">

      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveToCart}/>}
      <Header onCartClick={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between">
          <h1>{searchValue ? `Search to: "${searchValue}"` : "Все кроссовки"}</h1>
          <div className="search-block">
            <img width={14} height={14} src="/images/search.svg" alt="search" />
            {searchValue && <img onClick={() => setSearchValue('')} className="remove__btn cu-p" src="/images/x-btn.svg" alt="clear" />}
            <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder="Поиск ..." />
          </div>
        </div>


        <div className="sneakers d-flex justify-between flex-wrap">
          {
            items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((obj, index) => (
              <Card
                key={index}
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)} />
            ))
          }


        </div>
      </div>
    </div>
  );
}

export default App;
