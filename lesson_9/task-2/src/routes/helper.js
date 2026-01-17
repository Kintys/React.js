function createPageLinks(routeItems, pageLinksItem) {
    for (const routeItem of routeItems) {
        if (routeItem?.handle) {
            pageLinksItem[`${routeItem.handle.title}`] = routeItem.path
        }
        if (routeItem.children) {
            createPageLinks(routeItem.children, pageLinksItem)
        }
    }
    return pageLinksItem
}

export default createPageLinks
