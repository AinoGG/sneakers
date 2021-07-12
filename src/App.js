import Card from './components/Card/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';





function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]); 
  const [cartOpened, setCartOpened] = React.useState(false);
  
 
  




  React.useEffect(() => {
    fetch('https://60e6fab615387c00173e49d4.mockapi.io/items')
    .then(res => {
      return res.json();
    })
    .then(json => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj) => {
      setCartItems(prev => [...prev, obj]);
  }
  
   return (
    <div className="wrapper clear">

      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)}/>}
      <Header onCartClick={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img width={14} height={14} src="/images/search.svg" alt="search" />
            <input type="text" placeholder="Поиск ..." />
          </div>
        </div>


        <div className="sneakers d-flex justify-between flex-wrap">
          {
            items.map(obj => (
              <Card
               title={obj.title} 
               price={obj.price}
               imageUrl={obj.imageUrl} 
               onPlus={(obj) => onAddToCart(obj)}/>
            ))
          }


        </div>
      </div>
    </div>
  );
}

export default App;
