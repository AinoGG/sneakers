import React from "react";


function Drawer({ onClose, onRemove, items = []}) {
  
   
    return (

        <div className="overlay">
            <div className="drawer d-flex flex-column">
                <h2 className="d-flex justify-between align-center">Корзина <img className="remove__btn cu-p" src="/images/x-btn.svg" alt="x" onClick={onClose} /></h2>

            {items.length > 0 ? ( 
                           <div>
                                 <div className="cart__items">
                    {items.map((obj) => (
                        <div className="cart__item d-flex align-center">
                            <img className="mr-20" width={70} height={70} src={obj.imageUrl} alt="sneakers" />
                            <div className="mr-20">
                                <p className="mb-5">{obj.title}</p>
                                <b>{obj.price} руб.</b>
                            </div>
                            <img onClick={() => onRemove(obj.id)} className="remove__btn" src="/images/x-btn.svg" alt="x" />
                        </div>
                    ))}
                </div>
                <ul className="cart__price">
                    <li className="d-flex">
                        <span>Итого:</span>
                        <div></div>
                        <b>21 490 руб.</b>
                    </li>
                    <li className="d-flex">
                        <span>Налог 5%:</span>
                        <div></div>
                        <b>1074 руб.</b>
                    </li>
                </ul>
                <button id="submit">Оформить заказ <img src="/images/arrow.svg" alt="arrow" /></button>
                           </div>
                       ) : (<div  className="mt-40"><span>Корзина пуста</span> <button onClick={onClose} id="submit">Вернуться к покупкам </button></div>
                        ) 
                   } 

              
            </div>
        </div>

    );
}

export default Drawer;