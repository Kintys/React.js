function createPageLinks(routeItems, pageLinksItem) {
    for (const routeItem of routeItems) {
        if (routeItem?.handle) {
            const pathWithDash = routeItem.path.trim().at(0) !== '/' ?  `/${routeItem.path}` : routeItem.path
            pageLinksItem[`${routeItem.handle.title}`] = pathWithDash
        }
        if (routeItem.children) {
            createPageLinks(routeItem.children, pageLinksItem)
        }
    }
    return pageLinksItem
}

export default createPageLinks
