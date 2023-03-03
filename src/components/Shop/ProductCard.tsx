import React, {FC} from 'react';
import "./productCard.css"

interface Card {
    id: number,
    name: string,
    price: number,
    photo: string
}

interface Props {
    card: Card
}

const ProductCard:FC<Props> = ({card}) => {
    return (
        <div className="shopCard">
            <img src={card.photo} alt="" className="shopCard_img"/>
            <div className="shopCard_text">{card.name}</div>
            <div className="shopCard_price">350$</div>
        </div>
    );
};

export default ProductCard;