import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function GroceryInput() {
    const [item, setItem] = useState('');
    const [brand, setBrand] = useState('');
    const [count, setCount] = useState(0);

        return (
            <Container>
                <Form>
                    <Form.Row className="justify-content-md-center">

                        <Col>
                            <Form.Control
                                type="text"
                                className="grocery_input"
                                placeholder="Grocery Item"
                                value={item}
                                onChange={(event) => setItem(event.target.value)}
                            />
                        </Col>

                        <Col>
                            <Form.Control
                                type="text"
                                className="grocery_input"
                                placeholder="Grocery Brand"
                                value={brand}
                                onChange={(event) => setBrand(event.target.value)}
                            />
                        </Col>

                        <Col>
                                <ButtonGroup size="sm">
                                    <Button variant="outline-dark" onClick={() => setCount(count - 1)}>-</Button>
                                        <h3 className="counter">{count}</h3>
                                    <Button variant="outline-dark" onClick={() => setCount(count + 1)}>+</Button>
                                </ButtonGroup>
                        </Col>

                        <Col>
                            <input type="submit" value="Submit" />
                        </Col>
                    </Form.Row>
                </Form>
            </Container>
        )
}

export default GroceryInput;
