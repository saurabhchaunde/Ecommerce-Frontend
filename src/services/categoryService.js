import axios from 'axios';

const API_URL = 'http://localhost:8080/categories';

const getAllCategories = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching categories:', error);
    }
};

const getCategoryById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching category:', error);
    }
};

const createCategory = async (category) => {
    try {
        const response = await axios.post(API_URL, category);
        return response.data;
    } catch (error) {
        throw new Error('Error creating category:', error);
    }
};

const updateCategory = async (id, category) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, category);
        return response.data;
    } catch (error) {
        throw new Error('Error updating category:', error);
    }
};

const deleteCategory = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        throw new Error('Error deleting category:', error);
    }
};

export default { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory };
