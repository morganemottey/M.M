const INIT_PRODUCTS = {
    products: [
        { id: 1, title: 'Teeshirt', description: '10% elasthane 30% coton', price: 30 },
        { id: 2, title: 'Shirt', description: '100% coton', price: 25 },
        { id: 3, title: 'Coat', description: '75% moer 10% coton', price: 120 },
        { id: 4, title: 'Jeans', description: '100% jean', price: 89 },
        { id: 5, title: 'Trousers', description: '10% elasthane 15% coton ', price: 75 },
        { id: 6, title: 'Accessoires', description: '80% Or ', price: 49 }
    ]
}
export default function productsReducer(state = INIT_PRODUCTS, action = {}) {
    // PLEASE NOTE:
    // below actions are unused
    // kept for instance - Ajinkya
    switch (action.type) {
        case 'SET_PRODUCTS':
            console.log("gg red",action)
            return { ...state, products: action.products }

        case 'ADD_PRODUCT':
            return state.concat(action.payload);

        case 'DELETE_PRODUCT':
            let indexToDel = findProductIndex(state, action.payload.id);
            return [...state.slice(0, indexToDel), ...state.slice(indexToDel + 1)];

        case 'UPDATE_PRODUCT':
            let indexToUpdate = findProductIndex(state, action.payload.id);
            const newProductExtend = {
                ...state[indexToUpdate], title: action.payload.title
            };
            return [...state.slice(0, indexToUpdate), newProductExtend, ...state.slice(indexToUpdate + 1)];

    }

    function findProductIndex(products, id) {
        return products.findIndex((p) => p.id === id)
    }

    return state;
}