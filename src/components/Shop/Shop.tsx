import React, {useState} from 'react';
import "./shop.css"
import ProductCard from "./ProductCard";
import lol from "../../assets/white.jpg"
import {ProductPhoto} from "./ImportImage"
const Shop = () => {

    const [products, setProducts] = useState<any[]>([
        {
            id: 1,
            name: "Neuro Desk",
            price: 30.99,
            photo: ProductPhoto[1]
        },
        {
            id: 2,
            name: "Neuro Window",
            price: 30.99,
            photo: ProductPhoto[2]
        },
        {
            id: 3,
            name: "Neuro Space",
            price: 30.99,
            photo: ProductPhoto[3]
        },
        {
            id: 4,
            name: "Neuro Chair",
            price: 30.99,
            photo: ProductPhoto[4]
        },
        {
            id: 5,
            name: "Neuro Table",
            price: 30.99,
            photo: ProductPhoto[5]
        },
        {
            id: 6,
            name: "Neuro Room",
            price: 30.99,
            photo: ProductPhoto[0]
        }
    ])


    return (
        <div className="shop-container">
            <div className="chop-container_inner">
                {products.map(item =>
                    <ProductCard card={item}/>
                )}
            </div>
        </div>
    );
};

export default Shop;