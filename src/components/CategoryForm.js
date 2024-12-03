import React, { useState } from 'react';
import axios from 'axios';

const CategoryForm = () => {
    const [category, setCategory] = useState({ name: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCategory({ ...category, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/categories', category);
            alert('Category created successfully!');
        } catch (error) {
            console.error(error);
            alert('Category creation failed!');
        }
    };

    return (
        <div>
            <h2>Create Category</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={category.name} onChange={handleChange} />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CategoryForm;
