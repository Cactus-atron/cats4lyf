import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { RiShoppingBasketLine } from 'react-icons/ri';
import { FaCat } from 'react-icons/fa';
import { IoBagCheckOutline } from 'react-icons/io5';
import Items from './Items';

import './basket.css';

export const Basket = (props) => {
const [show, setShow] = useState(false);

return (
    <>
        <Button id="cart" variant="primary" size="lg" onClick={() => setShow(true)}>
            <RiShoppingBasketLine />
        </Button>

        <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="basket"
            animation="true"
            scrollable ="true"
            centered="true"
            >
            <Modal.Header closeButton>
            <Modal.Title id="basket">
                Your&nbsp;<strike>Cat</strike>&nbsp;Basket&nbsp;<FaCat />
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Items items={props.items} />
            </Modal.Body>
            <Button id="checkout" variant="info" size="sm" onClick={() => setShow(true)}>
                <IoBagCheckOutline />&nbsp;Checkout
            </Button>
        </Modal>
    </>
)}