import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  return (
    <div className="wrapper clear">
     
      <Drawer />     
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img width={14} height={14} src="/images/search.svg" alt="search" />
            <input type="text" placeholder="Поиск ..." />
          </div>
        </div>


        <div className="sneakers d-flex justify-between">
            <Card/>
          <div className="card">
            <div className="favorite">
              <img src="/images/heart-unliked.svg" alt="unliked" />
            </div>
            <img width={133} height={112} src="/images/sneakers/2.jpg" alt="Sneak" />
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className="d-flex justify-between align-center" >
              <div className="d-flex flex-column">
                <span >Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/images/plus.svg" alt="PLUS" />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img src="/images/heart-unliked.svg" alt="unliked" />
            </div>
            <img width={133} height={112} src="/images/sneakers/3.jpg" alt="Sneak" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center" >
              <div className="d-flex flex-column">
                <span >Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/images/plus.svg" alt="PLUS" />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img src="/images/heart-unliked.svg" alt="unliked" />
            </div>
            <img width={133} height={112} src="/images/sneakers/4.jpg" alt="Sneak" />
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="d-flex justify-between align-center" >
              <div className="d-flex flex-column">
                <span >Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/images/plus.svg" alt="PLUS" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
