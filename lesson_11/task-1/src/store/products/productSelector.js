import { createSelector } from '@reduxjs/toolkit'

const selectProducts = (state) => state.products.products
const selectFilter = (state) => state.products.filterValue
const selectSort = (state) => state.products.sortValue

const getSortParams = (sortValue) => {
    if (sortValue === 'asc') {
        return (a, b) => a.price - b.price
    }
    if (sortValue === 'desc') {
        return (a, b) => b.price - a.price
    }
    return (a, b) => 0
}

export const selectFilteredOrSortProduct = createSelector(
    [selectProducts, selectFilter, selectSort],
    (products, filter, sort) => {
        let result = products

        if (filter) {
            result = result.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()))
        }

        if (sort) {
            result = [...result].sort(getSortParams(sort))
        }

        return result
    }
)
