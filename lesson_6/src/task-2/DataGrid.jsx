import { useMemo, useState, useDeferredValue, memo } from 'react'
import Spinner from '../components/SpinnerComp'

import GridRow from './GridRow'
import styles from './DataGrid.module.css'
import FilterPanel from './FilterPanel'

function DataGrid({ data: products, loading, error }) {
    const [sortOpt, setSortOpt] = useState(0)
    const [filterValue, setFilterValue] = useState('')

    const deferredSortIndex = useDeferredValue(sortOpt)
    const deferredFilter = useDeferredValue(filterValue)

    const filteredProducts = useMemo(() => {
        const list = Array.isArray(products) ? products : []

        const filterName = deferredFilter.toLowerCase().trim() ?? ''

        return list.filter((p) => p.name.toLowerCase().includes(filterName))
    }, [products, deferredFilter])

    const sortOptions = [
        { name: 'Оберіть сортування', getSort: (arr) => arr },
        { name: 'За зростанням ↑', getSort: (arr) => [...arr].sort((a, b) => a.price - b.price) },
        { name: 'За спаданням ↓', getSort: (arr) => [...arr].sort((a, b) => b.price - a.price) }
    ]

    const visibleProducts = useMemo(() => {
        let next = filteredProducts

        return sortOptions[deferredSortIndex].getSort(next)
    }, [filteredProducts, deferredSortIndex])

    if (error) return <p style={{ color: 'red' }}>{error}</p>

    return (
        <>
            <div className={styles.container}>
                <FilterPanel onSelect={setSortOpt} onEmit={setFilterValue} selectOptions={sortOptions} />
                {loading ? (
                    <Spinner />
                ) : (
                    <>
                        <div className={styles.grid}>
                            {visibleProducts.map((product) => (
                                <GridRow key={product.id} product={product} />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default memo(DataGrid)
