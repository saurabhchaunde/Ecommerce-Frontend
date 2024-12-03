import axios from 'axios';

const API_URL = 'http://localhost:8080/products';

const getAllProducts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching products:', error);
    }
};

const getProductById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching product:', error);
    }
};

const createProduct = async (categoryId, product) => {
    try {
        const response = await axios.post(`${API_URL}/category/${categoryId}`, product);
        return response.data;
    } catch (error) {
        throw new Error('Error creating product:', error);
    }
};

const updateProduct = async (id, product) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, product);
        return response.data;
    } catch (error) {
        throw new Error('Error updating product:', error);
    }
};

const deleteProduct = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        throw new Error('Error deleting product:', error);
    }
};

export default { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
