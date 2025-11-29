import style from './Task-5.module.css'
function Description({ description }) {
    const { text } = style
    return (
        <>
            <p className={text}>{description}</p>
        </>
    )
}

export default Description
