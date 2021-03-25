import React from 'react'
import { useLocation, useHistory, Redirect } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import { RoundImage } from '../roundImage'
import { Chart } from './chart'
import { Attribute } from './attribute'
import styles from './profile.module.css'

export const Profile = () => {
    const location = useLocation()
    const history = useHistory()

    if (location.state === undefined) {
        return <Redirect to="/" />
    }

    let catAge = location.state.age === 1 ? 15 : location.state.age * 4 + 20
    const age = `${catAge} years (${location.state.age} human years)`

    return (
        <>
            <Button 
                className={styles.backButton}
                onClick={() => history.goBack()}
                variant="secondary"
            >
                Back
            </Button>

            <Card>
                <Card.Header>
                <h1 className="text-center">{location.state.name}</h1>
                <h2 className="text-center">{location.state.job}</h2>    
                </Card.Header>
            </Card>

            <Row className="justify-content-around mb-3">
                <Col xs={11} lg={5} className="mt-4">
                    <Card className="h-100">
                        <Card.Body>
                            <div className="d-flex justify-content-center">
                                <RoundImage width={300} height={300} imgSrc={location.state.imgSrc} />
                            </div>                    
                            <Attribute title="Age" value={age} />
                            <Attribute title="Country" value={location.state.country} />
                            <Attribute title="Favourite Music" value={location.state.music} />
                            <Attribute title="Email Address" value={location.state.email} />
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={11} lg={5} className="mt-4">
                    <Card className="h-100">
                        <Card.Body>
                            <Chart breed={location.state.breed} />
                            <Attribute title="Breed" value={location.state.breed.name} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}