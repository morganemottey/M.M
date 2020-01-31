import axios from "axios";
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

export function addProduct({ id, title, description, price , photo }) {
    return {
        type: ADD_PRODUCT,
        payload: { id, title, description, price , photo }
    }
}
export function updateProduct({ id, title }) {
    return {
        type: UPDATE_PRODUCT,
        payload: { id, title }
    }
}

export const getProducts = () => {
    return async dispatch => {
        try {
            console.log('GG');
            const result = await axios.get(`http://localhost:5000/api/products`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem("token")}`
                }
            });
            console.log("getImages", result.data);
            dispatch({ type: "SET_PRODUCTS", products: result.data });
        } catch (err) {
            console.log(err);
        }
    }
};