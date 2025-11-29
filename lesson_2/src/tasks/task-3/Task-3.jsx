// Задача 3. Елемент тренажера англійської. Виводимо зображення елемента і слово. Користувач вводить відповідь. Якщо вірно – відтворюємо фразу «Добре. Молодець!» (і додаємо зелену рамку до елемента), якщо ні - то відтворюємо фразу «Невірно, спробуйте ще раз» (і додаємо червону рамку).

import { useState } from 'react'
import initialWordsToLorn from './Api'
import style from './Task-3.module.css'

const initInput = ''

function Task_3() {
    const [wordsToLorn, setWordsToLorn] = useState(initialWordsToLorn)
    const [input, setInput] = useState(initInput)
    const [isAnswer, setIsAnswer] = useState(null)

    const { container, img, button, buttonRight, text } = style

    const onChangeCardNext = (index) => {
        setWordsToLorn((prev) =>
            prev.map((item, i) => {
                if (i === index) return { ...item, isActive: false }
                if (i === index + 1) return { ...item, isActive: true }
                return item
            })
        )
        setIsAnswer(null)
        setInput('')
    }

    const onChangeCardPrev = (index) => {
        setWordsToLorn((prev) =>
            prev.map((item, i) => {
                if (i === index) return { ...item, isActive: false }
                if (i === index - 1) return { ...item, isActive: true }
                return item
            })
        )
        setIsAnswer(null)
        setInput('')
    }

    const activeIndex = wordsToLorn.findIndex((item) => item.isActive)
    const activeItem = wordsToLorn[activeIndex]

    const onCheckAnswer = () => {
        const answer = input.trim().toLowerCase()
        const word = activeItem.ukr.toLowerCase()
        setIsAnswer(word === answer)
    }

    const showFeedbackMessage = () => {
        if (isAnswer === null) return null
        if (isAnswer) {
            return <p>Добре. Молодець!</p>
        } else return <p>Невірно, спробуйте ще раз</p>
    }

    const getBorderClass = isAnswer === null ? '' : isAnswer ? style['green-border'] : style['red-border']

    return (
        <>
            <h2>Task 3</h2>
            <div className={`${container} ${getBorderClass}`}>
                <div>
                    <img src={activeItem.imgSrc} className={img} alt="Image" />
                </div>
                <span className={text}>{activeItem.eng}</span>
                {activeIndex > 0 && (
                    <button onClick={() => onChangeCardPrev(activeIndex)} className={button}>
                        &#10229;
                    </button>
                )}

                {activeIndex < wordsToLorn.length - 1 && (
                    <button
                        onClick={() => onChangeCardNext(activeIndex)}
                        className={`${button} ${style['button-right']}`}
                    >
                        &#10230;
                    </button>
                )}
            </div>

            <div className={style['input-block']}>
                <label>
                    Ваш переклад
                    <br />
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                </label>
                <br />
                <br />
                <button onClick={onCheckAnswer}>перевірити</button>
            </div>
            <br />
            {showFeedbackMessage()}
        </>
    )
}

export default Task_3
