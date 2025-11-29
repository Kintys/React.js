function TitleLink({ titleLink, url }) {
    return (
        <>
            <a href={url}>
                <h3>{titleLink}</h3>
            </a>
        </>
    )
}

export default TitleLink
