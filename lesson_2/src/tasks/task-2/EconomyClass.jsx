import { useState } from 'react'
import style from './Task-2.module.css'
import { v4 as uuidv4 } from 'uuid'

function EconomyClass() {
    const [showFarewell, setShowFarewell] = useState(false)

    const imgSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkr6svXdvW0KQjTECbk5L776ZMkXoYrmE3VA&s'
    const options = [
        { id: uuidv4(), value: 1, name: 'Пиво і чіспи' },
        { id: uuidv4(), value: 2, name: 'Кава з молоком' },
        { id: uuidv4(), value: 3, name: 'Кола з льодом' }
    ]
    const onSelectOptions = () => {
        setShowFarewell(true)
    }
    const showContent = () => {
        if (showFarewell) return <p className={style.actions}>Гарної подорожі!</p>
        else
            return (
                <select className={style.actions} onChange={onSelectOptions}>
                    {[
                        options.map((item) => (
                            <option key={item.id} value={item.value}>
                                {item.name}
                            </option>
                        ))
                    ]}
                </select>
            )
    }
    return (
        <>
            <div className={style.container}>
                <img src={imgSrc} alt="Economy class cabin" />
                {showContent()}
            </div>
        </>
    )
}

export default EconomyClass
