import React from 'react';
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import {useTg} from "../../hooks/useTg";

const products = [
    {id: '1', title: 'title', price: 200, description: 'description'},
    {id: '2', title: 'title', price: 200, description: 'description'},
    {id: '3', title: 'title', price: 200, description: 'description'},
    {id: '4', title: 'title', price: 200, description: 'description'},
    {id: '5', title: 'title', price: 300, description: 'description'},
    {id: '6', title: 'title', price: 200, description: 'description'},
    {id: '7', title: 'title', price: 200, description: 'description'},
    {id: '8', title: 'title', price: 200, description: 'description'},
]

const getTotalPrice = (items = []) => {
    return items.reduce((total, item) => {
        return total += item.price;
    }, 0)
}

const ProductList = () => {
    const [addedItems, setAddedItems] = React.useState([]);
    const {tg} = useTg()
    const onAdd = (product) => {
        const alreadyAdded = addedItems.find((item) => item.id === product.id);

        let newItems = []

        if (alreadyAdded) {
            newItems = addedItems.filter((item) => item.id !== product.id) ;
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems)

        if (newItems.length === 0) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить :${getTotalPrice(newItems)}`,
            })
        }
    }

    return (
        <div className={"list"}>
            {products.map(item => (
                <ProductItem
                    key={item.id}
                    product={item}
                    onAdd={onAdd}
                    className={"item"}
                />
            ))}
        </div>
    );
};

export default ProductList;