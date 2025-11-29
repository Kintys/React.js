// Задача 2. З випадаючого списку вибираємо клас квитка у літаку. Якщо
// 1) бізнес -  виводимо елементи для вибору газети та коньяку (якщо вибрано коньяк, то запропонувати закуску (так/ні)), на фоні зображення бізнес кают
// 2) економ – виводимо елементи для вибору типу пива і чипсів, на фоні хмарки.

import { useState } from 'react'
import BusinessClass from './BusinessClass'
import EconomyClass from './EconomyClass'

function Task_2() {
    const [selectedClass, setSelectedClass] = useState('')

    const handleClassChange = (event) => {
        const value = event.target.value
        setSelectedClass(value)
    }

    const isBusinessClassSelected = selectedClass === 'business'
    const isClassChosen = selectedClass !== ''

    return (
        <>
            <h2>Task 2</h2>
            <select value={selectedClass} onChange={handleClassChange}>
                <option value="">Оберіть клас</option>
                <option value="business">Бізнес</option>
                <option value="economy">Єконом</option>
            </select>

            {isClassChosen && <>{isBusinessClassSelected ? <BusinessClass /> : <EconomyClass />}</>}
        </>
    )
}

export default Task_2
