import styles from './GameNumberForm.module.css'

function GameNumberForm({ numberList = [] }) {
    return (
        <>
            <div className={styles.container}>
                {numberList.map((number, index) => {
                    return (
                        <div
                            key={index}
                            className={` 
                            ${styles.cell}
                            ${number.isActive ? styles.open : styles.close} `}
                        >
                            {number.value}
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default GameNumberForm
