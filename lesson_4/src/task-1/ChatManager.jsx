import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ChatWindow from './ChatWindow'
import styles from './ChatManager.module.css'

function ChatManager() {
    const [chatList, setChatList] = useState(() => [])

    const onAddMsg = (msgText) => {
        const newMsg = {
            id: uuidv4(),
            msg: msgText,
            like: 0,
            dislike: 0
        }
        setChatList((prevList) => [...prevList, newMsg])
    }

    const incrementLikeOrDislike = (like) => {
        return (like ?? 0) + 1
    }

    const onChangeLike = (msgId, flag) => {
        const newChatList = chatList.map((item) => {
            if (flag === 'likeUp') {
                return item.id === msgId ? { ...item, like: incrementLikeOrDislike(item.like) } : item
            } else if (flag === 'likeDown') {
                return item.id === msgId ? { ...item, dislike: incrementLikeOrDislike(item.dislike) } : item
            }
        })
        setChatList(newChatList)
    }

    return (
        <>
            <div className={styles.manager}>
                <ChatWindow
                    msgList={chatList}
                    actions={{
                        onLikeUp: onChangeLike,
                        onLikeDown: onChangeLike
                    }}
                    onAddMsg={onAddMsg}
                />
            </div>
        </>
    )
}

export default ChatManager
