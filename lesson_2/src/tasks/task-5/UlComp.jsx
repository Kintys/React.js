import LiElem from './LiElem'
import style from './Task-5.module.css'
function UlComp({ webList }) {
    const { container } = style
    const renderWebList = () => webList.map((item) => <LiElem key={item.id} dataItem={item} />)
    return (
        <>
            <ul className={`${style['null-base-style']} ${container}`}>{renderWebList()}</ul>
        </>
    )
}

export default UlComp
