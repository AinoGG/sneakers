function Drawer() {
    return (

        <div style={{ display: 'none' }} className="overlay">
            <div className="drawer d-flex flex-column">
                <h2 className="d-flex justify-between align-center">Корзина <img className="remove__btn cu-p" src="/images/x-btn.svg" alt="x" /></h2>
                <div className="cart__items">
                    <div className="cart__item d-flex align-center">
                        <img className="mr-20" width={70} height={70} src="/images/sneakers/sneakcart1.jpg" alt="sneakers" />
                        <div className="mr-20">
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="remove__btn" src="/images/x-btn.svg" alt="x" />
                    </div>
                    <div className="cart__item d-flex align-center">
                        <img className="mr-20" width={70} height={70} src="/images/sneakers/sneakcart2.jpg" alt="sneakers" />
                        <div className="mr-20">
                            <p className="mb-5">Кроссовки Puma X Aka Boku Future Rider</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="remove__btn" src="/images/x-btn.svg" alt="x" />
                    </div>
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
        </div>

    );
}

export default Drawer;