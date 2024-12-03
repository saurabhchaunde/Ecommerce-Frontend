import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = () => {
    const [order, setOrder] = useState({ productId: '', quantity: 1 });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrder({ ...order, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/orders', order);
            alert('Order created successfully!');
        } catch (error) {
            console.error('Error creating order:', error);
            alert('Order creation failed!');
        }
    };

    return (
        <div>
            <h2>Create Order</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Product ID:</label>
                    <input
                        type="text"
                        name="productId"
                        value={order.productId}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Quantity:</label>
                    <input
                        type="number"
                        name="quantity"
                        value={order.quantity}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default OrderForm;
