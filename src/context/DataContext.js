import { createContext, useEffect, useState } from "react";

import data from '../data';

const DataContext = createContext();

const allCategories = ['all', ...new Set(data.map(item => item.category))];

export const DataProvider = ({ children }) => {

    const defaultBasket = JSON.parse(localStorage.getItem('basket')) || [];

    const [items, setItems] = useState(data);
    const [categories, setCategories] = useState(allCategories);
    const [basket, setBasket] = useState(defaultBasket);

    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(basket));
    }, [basket])

    // items
    const addItem = (data) => {
        setBasket([...basket, { ...data }]);
    };


    const removeItem = (item) => {
        setBasket(basket.filter(data => data.id !== item.id));
    }

    const filterItems = (category) => {
        if (category === 'all') {
            setItems(data);
            return;
        }
        const newItems = data.filter(item => item.category === category);
        setItems(newItems);
    }

    const values = {
        filterItems,
        categories,
        setCategories,
        items,
        setItems,
        basket,
        setBasket,
        addItem,
        removeItem

    }

    return (
        <DataContext.Provider value={{ ...values }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;