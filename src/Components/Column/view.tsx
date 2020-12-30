import React from 'react';
import { Card } from '../Card/card';
import './styles.scss';

export default function Column() {
    return (
     <div className= "column-wrapper">
          componente Columna
        <Card
        product="product"
        client="client"
        phone="phone"
        cost={123}
        deliveryType="tipo1"/>
     </div>
    )
}
