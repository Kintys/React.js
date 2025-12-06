import { useState } from 'react'
import style from './GameField.module.css'
import checkWinner from '../../helper/game.js'
import DeclareWinner from './DeclareWinner.jsx'

function GameField({ initGameField }) {
    const [gameFiled, setGameField] = useState(() => initGameField)
    const [history, setHistory] = useState([])
    const [currentShapeNumber, setCurrentShapeNumber] = useState(0)
    const [winner, setWinner] = useState(0)

    const saveHistory = (gameField) => {
        setHistory((prevH) => [...prevH, JSON.parse(JSON.stringify(gameField))])
    }

    const isCellSelected = (prevGameField, rowIndex, columnIndex) => prevGameField[rowIndex][columnIndex] !== 0

    const isWinner = (gameField) => {
        const result = checkWinner(gameField)

        if (result !== 0) {
            setWinner(result)
        }
    }

    const onSelectCell = ({ rowIndex, columnIndex }) => {
        const nextShape = currentShapeNumber === 1 ? 2 : 1

        saveHistory(gameFiled)

        setGameField((prevGameField) => {
            if (isCellSelected(prevGameField, rowIndex, columnIndex)) {
                return prevGameField
            }

            const newField = prevGameField.map((row, r) =>
                row.map((cell, c) => (r === rowIndex && c === columnIndex ? nextShape : cell))
            )

            isWinner(newField)

            return newField
        })
        setCurrentShapeNumber(nextShape)
    }

    const getCurrentClass = (cell) => (cell === 1 ? style.cross : cell === 2 ? style.circle : '')

    const onRevert = () => {
        const lastGameField = history.at(-1)
        setGameField(lastGameField)
        setHistory((prev) => prev.slice(0, -1))
    }

    return (
        <>
            <div className={style['container']}>
                {gameFiled.map((row, rowIndex) => (
                    <div key={rowIndex} className={style.row}>
                        {row.map((cell, columnIndex) => {
                            const className = getCurrentClass(cell)

                            return (
                                <span
                                    key={columnIndex}
                                    className={`${style.cell} ${className}`}
                                    onClick={() => onSelectCell({ rowIndex, columnIndex })}
                                ></span>
                            )
                        })}
                    </div>
                ))}
                <button onClick={onRevert} className={style['button']}>
                    Back move
                </button>
                {!!winner && <DeclareWinner winnerClass={getCurrentClass(currentShapeNumber)} />}
            </div>
        </>
    )
}

export default GameField
