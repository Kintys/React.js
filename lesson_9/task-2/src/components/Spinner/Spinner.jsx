import styles from './Spinner.module.css'
function Spinner() {
    return (
        <>
            <div className={styles.spinner}>
                <img
                    style={{
                        width: '100px',
                        height: '100px'
                    }}
                    src="https://upload.wikimedia.org/wikipedia/commons/a/ad/YouTube_loading_symbol_3_%28transparent%29.gif"
                    alt="Image"
                />
            </div>
        </>
    )
}

export default Spinner
