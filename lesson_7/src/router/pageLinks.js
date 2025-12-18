export default {
    home: `/`,
    about: '/about',
    productsList: '/products',
    buyNow: '/buy',
    cart: '/cart',
    admin: '/admin',
    getProductDetail: (id) => `/product/${id}`,
    addProduct: '/product/add',
    getProductEdit: (id) => `/product/${id}/edit`
}
