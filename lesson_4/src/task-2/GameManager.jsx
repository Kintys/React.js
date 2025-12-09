import { useEffect, useState } from 'react'
import GameNumberForm from './GameNumberForm'
import GamePlayerControl from './GamePlayerControl'
import styles from './GameManager.module.css'

function GameManager() {
    const [gameNumberList, setGameNumberList] = useState(() => [])
    const [currentPlayer, setCurrentPlayer] = useState(1)
    const [playersCount, setPlayersCount] = useState(() => [[], []])
    const [isValidate, setIsValidate] = useState(() => [false, false])
    const [gameCount, setGameCount] = useState(0)
    const [loser, setLoser] = useState(null)

    const pickUniqueNumbers = (count = 3) => {
        const pool = Array.from({ length: 9 }, (_, i) => i + 1)
        const result = []
        for (let i = 0; i < count; i++) {
            const idx = Math.floor(Math.random() * pool.length)
            result.push(pool[idx])
            pool.splice(idx, 1)
        }
        return result
    }

    useEffect(() => {
        const createNumberList = () => {
            const values = pickUniqueNumbers(3)
            const newArr = values.map((v) => ({ value: v, isActive: false }))
            setGameNumberList(newArr)
        }
        createNumberList()
    }, [])

    const hasLose = (count) => {
        return count >= (gameNumberList.length || 3)
    }

    const markMatchedNumbers = (value) => {
        const playerNumber = Number(value)
        if (Number.isNaN(playerNumber)) return 0

        let newlyRevealed = 0

        const next = gameNumberList.map((item) => {
            if (item.value === playerNumber && !item.isActive) {
                newlyRevealed += 1
                return { ...item, isActive: true }
            }
            return item
        })

        if (newlyRevealed > 0) {
            setGameNumberList(next)
            setGameCount((prev) => prev + newlyRevealed)
        }

        return newlyRevealed
    }

    const isMoveHistory = (playerMove) => {
        if (!playerMove) return false
        const history = playersCount.flat().map(String)
        return history.includes(String(playerMove))
    }

    function handlePlayerMove(playerMove, playerId) {
        if (!playerMove || loser) return
        const idx = playerId - 1

        if (isMoveHistory(playerMove)) {
            setIsValidate((prev) => {
                const next = [...prev]
                next[idx] = true
                return next
            })
            return
        }

        setIsValidate((prev) => {
            const next = [...prev]
            next[idx] = false
            return next
        })

        setPlayersCount((prev) => {
            const next = [...prev]
            next[idx].push(playerMove)
            return next
        })

        const newly = markMatchedNumbers(playerMove)
        const totalOpen = gameCount + newly

        if (hasLose(totalOpen)) {
            setLoser(playerId)
            console.log(`Loser: Player ${playerId}`)
            return
        }

        setCurrentPlayer(3 - playerId)
    }

    const clearPlayerValidation = (playerId) => {
        setIsValidate((prev) => {
            const next = [...prev]
            next[playerId - 1] = false
            return next
        })
    }

    const isPlayer1Queue = currentPlayer === 1
    const isPlayer2Queue = currentPlayer === 2

    return (
        <>
            <div className={styles.container}>
                <GameNumberForm numberList={gameNumberList} />
                <div className={styles.body}>
                    <GamePlayerControl
                        title="Гравець 1"
                        onMove={handlePlayerMove}
                        isQueue={isPlayer1Queue}
                        isValidate={isValidate[0]}
                        playerId={1}
                        onClearValidate={clearPlayerValidation}
                    />
                    <GamePlayerControl
                        title="Гравець 2"
                        onMove={handlePlayerMove}
                        isQueue={isPlayer2Queue}
                        isValidate={isValidate[1]}
                        playerId={2}
                        onClearValidate={clearPlayerValidation}
                    />
                </div>
                <div>
                    {playersCount.map((playerCount, index) => {
                        return (
                            <p key={index} className={styles.list}>
                                <span>Гравець №{index + 1} :</span>
                                <span>{playerCount.join(', ')}</span>
                            </p>
                        )
                    })}
                    {loser && <p>Програв гравець: {loser}</p>}
                </div>
            </div>
        </>
    )
}

export default GameManager
