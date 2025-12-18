export const API_BASE_URL = 'http://localhost:5000/api'

export default {
    productsList: `/products`,
    addProduct: `/products`,
    getUpdateProductLink: (id) => `/products/${id}`,
    getProductById: (id) => `/products/${id}`,
    getDeleteProductLink: (id) => `/products/${id}`
}
