import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

function GroceryInput() {
    const [item, setItem] = useState('');
    const [brand, setBrand] = useState('');
    const [count, setCount] = useState(0);

        return (
            <div>
                <input
                    type="text"
                    className="grocery_input"
                    placeholder="Grocery Item"
                    value={item}
                    onChange={(event) => setItem(event.target.value)}
                />
                <input
                    type="text"
                    className="grocery_input"
                    placeholder="Grocery Brand"
                    value={brand}
                    onChange={(event) => setBrand(event.target.value)}
                />

                <Button variant="outline-dark" onClick={() => setCount(count + 1)}> + </Button>
                <p className="counter">{count}</p>
                <Button variant="outline-dark" onClick={() => setCount(count - 1)}> - </Button>
                <input type="submit" value="Submit" />
            </div>
        )
}

export default GroceryInput;
