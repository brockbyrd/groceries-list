import React, { useState } from 'react'

function GroceryInput() {
    const [item, setItem] = useState('');
    const [brand, setBrand] = useState('');
    const [count, setCount] = useState(0);

        return (
            <div>
                <input type="text" className="grocery_input" onChange={() => setItem() }placeholder="Grocery Item" />
                <input type="text" className="grocery_input" placeholder="Grocery Brand" />

                <button className="counter_button" onClick={() => setCount(count + 1)}> + </button>
                <p className="counter">{count}</p>
                <button className="counter_button" onClick={() => setCount(count - 1)}> - </button>
                <input type="submit" />
            </div>
        )
}

export default GroceryInput;
