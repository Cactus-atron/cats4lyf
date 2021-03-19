import React from 'react'
import { useHistory } from 'react-router-dom'
import Card from 'react-bootstrap/Card' 
import Button from 'react-bootstrap/Button'

import { RoundImage } from '../../roundImage'
import { Attribute } from './attribute'

export const ProductCard = (props) => {
    const history = useHistory()

    const viewProfile = () => {
        history.push("/profile", {
            imgSrc: props.imgSrc,
            music: props.music,
            name: props.name,
            job: props.job,
            breed: props.breed,
            age: props.age,
            country: props.country,
            email: props.email
        })
    }
    
    return (
        <Card>
            <Card.Header className="d-flex justify-content-center">
                <RoundImage imgSrc={props.imgSrc} />
            </Card.Header>

            <Card.Body>
                <Card.Title>{props.name} £{props.price.toFixed(2)}</Card.Title>
                <Card.Subtitle>{props.job}</Card.Subtitle>

                <Card.Text className="d-flex flex-column mt-3">
                    <Attribute name="Favourite Music" value={props.music} />
                    <Attribute name="Breed" value={props.breed.name} />
                    <Attribute name="Temperament" value={props.breed.temperament} />
                </Card.Text>
            </Card.Body>

            <Card.Footer className="d-flex flex-wrap justify-content-between">
                <Button 
                    onClick={() => props.addToBasket(props.id)}
                    disabled={!props.inStock}
                        active={!props.inStock}
                        variant={props.inStock ? "success" : "danger"}
                >
                    {props.inStock ? "Add to basket" : "Out of stock"}
                </Button>

                <Button variant="info" onClick={viewProfile}>
                    View Profile
                </Button>
            </Card.Footer>        
        </Card>
    )
}