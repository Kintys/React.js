const employees = [
    'Шевченко І. М.',
    'Коваленко М. О.',
    'Петренко О. І.',
    'Мельник К. С.',
    'Бондар Д. А.',
    'Романенко О. В.',
    'Гончар А. П.',
    'Сидоренко Н. І.'
]

class RequestManager {
    constructor(list) {
        this.list = [...list]
    }

    async getData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.list)
            }, 1000)
        })
    }
}

export default new RequestManager(employees)
