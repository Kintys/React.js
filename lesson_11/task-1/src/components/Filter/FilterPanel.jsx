import useDebounce from '@/hooks/useDebounse'
import useInput from '@/hooks/useInput'
import { clearFilter, clearSort, setFilter, setSort } from '@/store/products/productsSlice'
import { useEffect, useId, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import styles from './FilterPanel.module.css'

function FilterPanel() {
    const inputId = useId()
    const selectId = useId()
    const input = useInput()
    const dispatch = useDispatch()

    const debouncedFilter = useDebounce((value) => {
        dispatch(setFilter(value))
    }, 500)

    const handleSort = useCallback(
        (sortValue) => {
            dispatch(setSort(sortValue))
        },
        [dispatch]
    )

    const handleFilterByName = useCallback(
        (e) => {
            input.inputProps.onChange(e)
            const filterValue = e.target.value
            debouncedFilter(filterValue)
        },
        [debouncedFilter]
    )

    useEffect(() => {
        return () => {
            dispatch(clearFilter())
            dispatch(clearSort())
        }
    }, [dispatch])

    return (
        <div className={styles.filterPanel}>
            <div className={styles.filterGroup}>
                <label htmlFor={inputId}>Search by name:</label>
                <input
                    id={inputId}
                    type="text"
                    placeholder="Enter name..."
                    value={input.inputProps.value}
                    onChange={handleFilterByName}
                />
            </div>

            <div className={styles.filterGroup}>
                <label htmlFor={selectId}>Sort:</label>
                <select name="sort" id={selectId} defaultValue="" onChange={(e) => handleSort(e.target.value)}>
                    <option value="">No sorting</option>
                    <option value="asc">Price: Low to High</option>
                    <option value="desc">Price: High to Low</option>
                </select>
            </div>
        </div>
    )
}

export default FilterPanel
