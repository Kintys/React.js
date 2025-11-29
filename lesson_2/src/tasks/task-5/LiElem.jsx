import Description from './Description'
import HeaderLink from './HeaderLink'
import TitleLink from './TitleLink'
import style from './Task-5.module.css'

function LiElem({ dataItem }) {
    return (
        <>
            <li className={style['list-item']}>
                <HeaderLink title={dataItem.title} url={dataItem.url} iconUrl={dataItem.icon} />
                <TitleLink titleLink={dataItem.linkTitle} url={dataItem.url} />
                <Description description={dataItem.description} />
            </li>
        </>
    )
}

export default LiElem
