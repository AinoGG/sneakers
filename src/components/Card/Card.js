import styles from './Card.module.scss';
import React from 'react';


function Card({onFavorite, imageUrl, title, price, onPlus}) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(false);

    const onClickPlus = () => {
        onPlus({ imageUrl, title, price });
        setIsAdded(!isAdded);
    }

    const onClickFavorite = () => {
        setIsFavorite(!isFavorite);
    }
    return (

        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
                <img src={isFavorite ? "/images/liked.svg" : "/images/unliked.svg"} alt="unliked" />
            </div>
            <img width={133} height={112} src={imageUrl} alt="Sneak" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center" >
                <div className="d-flex flex-column">
                    <span >Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img className={styles.plus} width={32} height={32} src={isAdded ? "/images/btn-checked.svg": "/images/btn-plus.svg"} alt="PLUS" onClick={onClickPlus} />
            </div>
        </div>

    );
}

export default Card;
