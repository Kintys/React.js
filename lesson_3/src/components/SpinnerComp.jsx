function Spinner({ isSpinnerShow }) {
    return (
        <>
            {isSpinnerShow && (
                <img
                    style={{
                        width: '50px',
                        height: '50px'
                    }}
                    src="https://upload.wikimedia.org/wikipedia/commons/a/ad/YouTube_loading_symbol_3_%28transparent%29.gif"
                    alt="Image"
                />
            )}
        </>
    )
}

export default Spinner
