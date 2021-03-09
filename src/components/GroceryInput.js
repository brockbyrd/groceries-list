import React, { useState } from 'react'

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

                <button className="counter_button" onClick={() => setCount(count + 1)}> + </button>
                <p className="counter">{count}</p>
                <button className="counter_button" onClick={() => setCount(count - 1)}> - </button>
                <input type="submit" value="Submit" />
            </div>
        )
}

export default GroceryInput;
