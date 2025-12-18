export const API_BASE_URL = 'https://react-js-56p6.onrender.com/api'

export default {
    productsList: `/products`,
    addProduct: `/products`,
    getUpdateProductLink: (id) => `/products/${id}`,
    getProductById: (id) => `/products/${id}`,
    getDeleteProductLink: (id) => `/products/${id}`
}
