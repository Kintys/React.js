import style from './GameField.module.css'

function DeclareWinner({ winnerClass }) {
    return (
        <>
            <div className={style['winner']}>
                Переміг: <span className={winnerClass}></span>
            </div>
        </>
    )
}

export default DeclareWinner
