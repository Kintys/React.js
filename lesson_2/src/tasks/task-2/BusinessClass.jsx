import { useState } from 'react'
import style from './Task-2.module.css'

function BusinessClass() {
    const [showServiceOptions, setShowServiceOptions] = useState(true)
    const [isBrandySelected, setIsBrandySelected] = useState(false)

    const imgSrc =
        'https://media.cntraveler.com/photos/62a7d0631b25607136d32fe2/16:9/w_2560%2Cc_limit/Business%2520Air%2520France%25201.jpg'

    const isBrandyOption = (name) => name === 'brandy'

    const handleServiceOptionClick = (event) => {
        const { name } = event.target
        setIsBrandySelected(isBrandyOption(name))
        setShowServiceOptions(false)
    }

    const handleSnackChoice = () => {
        setIsBrandySelected(false)
    }

    const shouldShowFarewell = !showServiceOptions && !isBrandySelected

    const showServiceContent = () => {
        if (showServiceOptions) {
            return (
                <div className={style.actions}>
                    <button name="newspaper" onClick={handleServiceOptionClick}>
                        газети
                    </button>
                    <br />
                    <button name="brandy" onClick={handleServiceOptionClick}>
                        коньяк
                    </button>
                    <br />
                </div>
            )
        }
    }

    const showServiceOptContent = () => {
        if (!showServiceOptions && isBrandySelected)
            return (
                <div className={style.actions}>
                    <p>Чи бажаєте закуску?</p>
                    <button onClick={handleSnackChoice}>Так</button>
                    <br />
                    <button onClick={handleSnackChoice}>Ні</button>
                </div>
            )
    }

    return (
        <div className={style.container}>
            <img src={imgSrc} alt="Business class cabin" />
            {showServiceContent()}
            {showServiceOptContent()}

            {shouldShowFarewell && <p className={style.actions}>Гарної подорожі!</p>}
        </div>
    )
}

export default BusinessClass
