import style from './Task-5.module.css'
function HeaderLink({ title, url, iconUrl }) {
    const { header, icon, title: titleClass } = style
    return (
        <>
            <a href={url} className={header}>
                <div className={icon}>
                    <img src={iconUrl} alt="Image" />
                </div>
                <div className={titleClass}>
                    <h3>{title}</h3>
                    <p>{url}</p>
                </div>
            </a>
        </>
    )
}

export default HeaderLink
