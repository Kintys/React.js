export const API_BASE_URL = 'http://localhost:5000/api'

const apiRoutes = {
    productsList: `/products`,
    getProductById: (id) => `/products/${id}`,
    getUpdateProductLink: (id) => `/products/${id}`,
    getDeleteProductLink: (id) => `/products/${id}`,
    deleteProduct: (id) => `/products/${id}`
}

export default apiRoutes
