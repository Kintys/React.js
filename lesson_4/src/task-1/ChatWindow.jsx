import InputChat from '../task-1/inputChat'
import windowStyles from './ChatWindow.module.css'
import MessageComp from './MessageComp'

function ChatWindow({ msgList, actions, onAddMsg }) {
    return (
        <>
            <div className={windowStyles.window}>
                {msgList.length > 0 ? (
                    msgList.map((magValue) => {
                        return <MessageComp key={magValue.id} {...magValue} {...actions} />
                    })
                ) : (
                    <div>New chat</div>
                )}
            </div>
            <InputChat onAddMsg={onAddMsg} />
        </>
    )
}

export default ChatWindow
