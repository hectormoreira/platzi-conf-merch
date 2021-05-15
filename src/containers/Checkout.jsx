import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Checkout.css';
import { handleSumTotal } from '../utils/handleSumTotal';
import {Helmet} from 'react-helmet';


const Checkout = () => {
    const { state, removeFromCart } = useContext(AppContext);
    const { cart } = state;

    const handleRemove = product => () => {
        removeFromCart(product);
    }

    return (
        <>
        <Helmet>
            <title>Lista de productos - Platzi Conf Merch</title>
        </Helmet>
        <div className="Checkout">
            <div className="Checkout-content">
                {cart.length > 0 ? <h3>Lista de productos</h3> : <h3>Carrito vacío</h3>}
                {cart.map((item) => (
                    <div className="Checkout-item" key={item.id}>
                        <div className="Checkout-element">
                            <h4>{item.title}</h4>
                            <span>{item.price}</span>
                        </div>
                        <button type="button" onClick={handleRemove(item)}> <i className="fas fa-trash-alt" /> </button>
                    </div>
                ))}
            </div>
            {cart.length > 0 && (
                <div className="Checkout-sidebar">
                    <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
                    <Link to="/checkout/information">
                        <button type="button">Continuar pedido</button>
                    </Link>
                </div>
            )}
        </div>
        </>
    );
};

export default Checkout;