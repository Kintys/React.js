export const API_BASE_URL = 'https://react-js-56p6.onrender.com/api'

const apiRoutes = {
    productsList: `/products`,
    getProductById: (id) => `/products/${id}`,
    getUpdateProductLink: (id) => `/products/${id}`,
    getDeleteProductLink: (id) => `/products/${id}`,
    deleteProduct: (id) => `/products/${id}`
}

export default apiRoutes
