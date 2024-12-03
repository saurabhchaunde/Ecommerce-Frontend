import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = ({ categoryId }) => {
    const [product, setProduct] = useState({ name: '', price: 0 });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8080/products/category/${categoryId}`, product);
            alert('Product created successfully!');
        } catch (error) {
            console.error(error);
            alert('Product creation failed!');
        }
    };

    return (
        <div>
            <h2>Create Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={product.name} onChange={handleChange} />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" name="price" value={product.price} onChange={handleChange} />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default ProductForm;
