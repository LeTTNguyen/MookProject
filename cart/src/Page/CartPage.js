import React from 'react';
import { Container } from 'reactstrap';
import CartContainer from '../Container/CartContainer';

function CartPage(props) {
    return (
        <div>
            <Container>
                <CartContainer/>
            </Container>
        </div>
    );
}

export default CartPage;