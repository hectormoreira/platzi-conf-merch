import { useContext } from 'react';
import AppContext from '../context/AppContext';

export const handleSumTotal = () => {
    const { state } = useContext(AppContext);
    const { cart } = state;

    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    return cart.reduce(reducer, 0);
}