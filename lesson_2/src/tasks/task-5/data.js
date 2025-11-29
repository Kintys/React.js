import { v4 as uuidv4 } from 'uuid'

const dataList = [
    {
        id: uuidv4(),
        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
        title: 'React',
        url: 'https://react.dev/',
        linkTitle: 'React',
        description:
            'React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.'
    },
    {
        id: uuidv4(),
        title: 'Wikipedia',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAAAAABXZoBIAAAAnklEQVR4AeTNIQiDQABG4b+u17X1aF6PK3YEO9iMJqPVau82y4FgMezS0oVLhqsHtrcqeqzDXv3CEz/6L4yTtZM3dnHmPTtjzXZAXKYVo4agkU2GI2Lloc6JDez1+flswMu1EQZ3xlE7lK8eKDkjtwE+crBMV+wesKmCiisGGepZIfQJpMj9SNb2MYWrChjVkULuCyCfRvsdmBieyQQAsoDk/9ryhFMAAAAASUVORK5CYII=',
        url: 'https://en.wikipedia.org/wiki/React_(software)',
        linkTitle: 'React(software)',
        description:
            'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components'
    },
    {
        id: uuidv4(),
        title: 'w3schools',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAYFBMVEX///+63c6gz7um0sCr1cSv18aYzLYmonRjtpTB4NP4/Pvu9/PT6eA3pnyFxKoAkFcAlV8AklpruZoAlV4AmmgAmGTi8evl8+4AiUmLx69Yso612ssupHgLnWxBqYHK5dqH3wIXAAAAq0lEQVR4AdzLgwEDQRRF0bu27f67zJuYDeQMv/gDlu24/OL5QYiI63luBMSup1+CpBlXeVGWhXK+3rKqkazxuCrbtquJm9aoemQYubJVLZJJt3QzTOlScXPOtbJ2Gk1xtiDlxm1UVa0h0Gfn1dYapY9VafTghXLSAauelVeBGXSAw4xavDC5DWPv2sblhXLVgpFWbcCbtLil5iLi3X4aTEhMFjMmxJFYQxIAAFFuC1yESb31AAAAAElFTkSuQmCC',
        url: 'https://www.w3schools.com/REACT/DEFAULT.ASP',
        linkTitle: 'React Tutorial',
        description:
            'React is a JavaScript library for building user interfaces. React is used to build single-page applications. React allows us to create reusable UI components.'
    }
]

export default dataList
