import axios from 'axios';

const API_URL = 'http://localhost:8080/orders';

const getAllOrders = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching orders:', error);
    }
};

const getOrderById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching order:', error);
    }
};

const createOrder = async (order) => {
    try {
        const response = await axios.post(API_URL, order);
        return response.data;
    } catch (error) {
        throw new Error('Error creating order:', error);
    }
};

const updateOrder = async (id, order) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, order);
        return response.data;
    } catch (error) {
        throw new Error('Error updating order:', error);
    }
};

const deleteOrder = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        throw new Error('Error deleting order:', error);
    }
};

export default { getAllOrders, getOrderById, createOrder, updateOrder, deleteOrder };
