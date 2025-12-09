import GeneralPage from './layout/GeneralPage'
import TaskMaster from './layout/TaskMaster'
import ChatManager from './task-1/ChatManager'
import GameManager from './task-2/GameManager'

const tasksList = [
    {
        title: 'Task-1',
        description:
            'Приклад. Створити імітатор мессенджера. Є можливість додавати/відображати повідомлення і ставити лайки (додайте стилі на свій розсуд).'
    },
    {
        title: 'Task-2',
        description: `Задача. Гра "Вгадай число". Правила гри:
    1) комп'ютер генерує трицифрове число;
    2) кожен гравець по черзі задає цифру, якої ще не було (не дозволяємо повторно вводити ті ж     цифри — блокуємо кнопку "Зробити хід");
    3) якщо цифру вгадано, вона відображається у полі гри "Число";
    4) програє той, хто вгадав останню цифру.`
    }
]
function App() {
    return (
        <>
            <GeneralPage>
                <TaskMaster title={tasksList[0].title} description={tasksList[0].description}>
                    <ChatManager />
                </TaskMaster>
                <TaskMaster title={tasksList[1].title} description={tasksList[1].description}>
                    <GameManager />
                </TaskMaster>
            </GeneralPage>
        </>
    )
}

export default App
