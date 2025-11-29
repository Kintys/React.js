// Задача 1. Вводимо логіна і пароль. Якщо логін вірний відображаємо смайл. Якщо ні, то:
// 1) якщо логін = Іван – колір повідомлення про помилку синій
// 2) якщо хтось інший, то колір повідомлення червоний

import { useState } from 'react'
import style from './Task_1.module.css'

const smileImgSrc =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7JRznBMEcYfFa-njcmAivEOEw7JcPM-szQw-rn9bFloSIU2WN5qanWHaKrgzSb7y8MUk&usqp=CAU'

const user = {
    name: 'Ivan',
    password: 1111
}

function Task_1() {
    const [inputsValue, setInputsValue] = useState({
        name: '',
        password: ''
    })

    const [isSuccess, setIsSuccess] = useState(false)
    const [wasSubmitted, setWasSubmitted] = useState(false)

    const handlerInputs = (e) => {
        const { name, value } = e.target
        setInputsValue((prevValue) => ({
            ...prevValue,
            [name]: value
        }))
        setWasSubmitted(false)
    }

    const isBlueError = () => inputsValue.name.toLowerCase() === 'ivan'

    const validateUser = () => {
        setWasSubmitted(true)

        const isValid = user.name === inputsValue.name && Number(user.password) === Number(inputsValue.password)

        setIsSuccess(isValid)
    }

    const errorClass = isBlueError() ? style['blue-error'] : style['red-error']
    return (
        <>
            <h2>Task 1</h2>
            <label>
                login
                <br />
                <input type="text" name="name" value={inputsValue.name} onChange={handlerInputs} />
            </label>
            <br />
            <br />
            <label>
                password
                <br />
                <input type="number" name="password" value={inputsValue.password} onChange={handlerInputs} />
            </label>
            <br />

            <button onClick={validateUser}>go</button>
            <br />
            {wasSubmitted && !isSuccess && <p className={errorClass}>Невірний логін і пароль!</p>}

            {isSuccess && <img src={smileImgSrc} alt="success" />}
        </>
    )
}

export default Task_1
