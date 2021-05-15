import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Map from '../components/Map';
import '../styles/components/Success.css';
import useGoogleAddress from '../hooks/useGoogleAddress';

const Success = () => {
    const { state } = useContext(AppContext);
    const { buyer } = state;    
    //const location = useGoogleAddress(buyer[0].address);
    return (
        <div className="Success">
            <div className="Success-content">
                <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
                <span>Tu pedido llegará en 3 días a tu dirección:</span>
                <div className="Success-map">
                    <Map />
                </div>
            </div>
        </div>
    );
}

export default Success;