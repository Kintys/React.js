import { useMemo, useState } from 'react'
import GridRow from '../task-2/GridRow'
import styles from '../task-2/DataGrid.module.css'
import useDebounce from './useDebounce'
import Spinner from '../components/SpinnerComp'
import FilterPanel from '../task-2/FilterPanel'

function SearchComp({ data: products, loading }) {
    const [debouncedValue, setDebouncedValue] = useState('')
    const [timeout, setTimeout] = useState(0)

    const debouncedSetFilter = useDebounce((value) => {
        setDebouncedValue(value)
    }, timeout)

    const selectOptions = [
        { name: 'Без затримки', getTimeOut: () => 0 },
        { name: 'Затримка 500 мс', getTimeOut: () => 500 },
        { name: 'Затримка 1000 мс', getTimeOut: () => 1000 },
        { name: 'Затримка 5000 мс', getTimeOut: () => 5000 }
    ]

    const onSelectTime = (index) => {
        setTimeout(selectOptions[index].getTimeOut())
    }

    const filteredProducts = useMemo(() => {
        const list = Array.isArray(products) ? products : []

        const filterName = debouncedValue.toLowerCase().trim() ?? ''

        return list.filter((p) => p.name.toLowerCase().includes(filterName))
    }, [products, debouncedValue])

    return (
        <div className={styles.container}>
            <div>
                <FilterPanel
                    onSelect={onSelectTime}
                    onEmit={debouncedSetFilter}
                    selectOptions={selectOptions}
                    selectLabel="Затримка"
                />
            </div>

            <div className={styles.grid}>
                {loading ? (
                    <Spinner />
                ) : (
                    <>
                        <div className={styles.grid}>
                            {Array.isArray(filteredProducts) &&
                                filteredProducts.map((product) => <GridRow key={product.id} product={product} />)}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default SearchComp
