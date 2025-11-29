import { v4 as uuidv4 } from 'uuid'

const wordsToLorn = [
    {
        id: uuidv4(),
        imgSrc: 'https://www.vidaxl.pl/on/demandware.static/-/Sites-vidaxl-catalog-master-sku/default/dwc60ed392/hi-res/436/4299/6367/4106464/image_1_4106464.jpg',
        eng: 'table',
        ukr: 'стіл',
        isActive: true
    },
    {
        id: uuidv4(),
        imgSrc: 'https://d.media.kavehome.com/image/upload/w_1900,f_auto/v1721808365/products/CC5212KY19_1V01.jpg',
        eng: 'chair',
        ukr: 'стілець',
        isActive: false
    },
    {
        id: uuidv4(),
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTstdlF-1Msa9dHPrtmH7V_pZgmqiiI-rNphQ&s',
        eng: 'window',
        ukr: 'вікно',
        isActive: false
    },
    {
        id: uuidv4(),
        imgSrc: 'https://dictionary.cambridge.org/pl/images/thumb/book_noun_001_01679.jpg?version=6.0.64',
        eng: 'book',
        ukr: 'книга',
        isActive: false
    }
]

export default wordsToLorn
