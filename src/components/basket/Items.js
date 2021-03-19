import React from 'react';
import { RoundImage } from '../roundImage'

import './basket.css';

const Items = (props) => {

    const items = props.items.map(item => {
    return (
        <div id="item-container" key={item.image.id}>
            <RoundImage imgSrc={item.image.url} width={100} height={100} />
            <p>{item.name}</p>
            <p>{item.breed.name}</p>
            <p>£{item.price.toFixed(2)}</p>
        </div>
    )
    })

    const total = () => {
        let totalSum = 0.00

        for (let i = 0; i < props.items.length; i++) {
            totalSum += props.items[i].price
        }

        return (
            <span>{totalSum.toFixed(2)}</span>
        )
    }


    if (props.items.length === 0) {
        return <p>Your basket is empty!</p>
    } else { 
        return (
            <div className="item-list">
                {items}
                <h5 id="total">Total: £{total()}</h5>
            </div> 
        )
    }
}

export default Items;