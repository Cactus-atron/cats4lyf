import React from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

import { ProductCard } from './productCard'

export const ProductList = (props) => {
    const cards = props.products?.map(product => {
        return <ProductCard
            key={product.id}
            id={product.id}
            imgSrc={product.image.url}
            name={product.name}
            price={product.price}
            job={product.job}
            music={product.music}
            breed={product.breed}
            age={product.age}
            country={product.country}
            email={product.email}
            addToBasket={props.addToBasket}
            inStock={product.inStock}
        />
    })

    return (
        <>

            
            <CardDeck className="p-3 mt-4">
                {cards}
            </CardDeck>

            <Col xs={10} sm={8} md={6} className="mx-auto mt-2 mb-4">
                <Button 
                    size="lg" 
                    variant="info" 
                    block 
                    onClick={props.refreshStock}
                >
                    Refresh Stock
                </Button>
            </Col>
        </>
    )
}