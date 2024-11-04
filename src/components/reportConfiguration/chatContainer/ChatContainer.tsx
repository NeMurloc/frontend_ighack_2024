import { observer } from 'mobx-react-lite';
import cl from './ChatContainer.module.css'
import { useState, useRef } from 'react';
import chatStore from '../../../store/chatStore';
import Messages from './messages/Messages';
import axios from 'axios';

// interface ChatContainerProps {
//     isOpen: boolean;
//     setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
// }

const ChatContainer: React.FC = observer(() => {
    const [value, setValue] = useState<string>('');
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value);

        // if (textAreaRef.current) {
        //     textAreaRef.current.style.height = 'auto';
        //     textAreaRef.current.style.height = `${Math.min(textAreaRef.current.scrollHeight, 200)}px`;
        // }
    };

    const handleSendMessage = async () => {
        if (value.trim()) {
            // Add user message to chatStore
            chatStore.addMessage(value);

            // Clear input and reset textarea height
            setValue('');
            if (textAreaRef.current) {
                textAreaRef.current.style.height = 'auto';
            }

            try {
                const payload = {
                    prompt: `Найди все данные, которые отвечают на этот вопрос: ${value}`,
                    milvus_prompt: `Ответь на данный вопрос - ${value}, используя следующие данные`
                };
                // POST request with the user message
                const response = await axios.post('/api/sendMessage', payload);

                // Add server response to chatStore
                if (response.data && response.data.reply) {
                    chatStore.addResponse(response.data.reply);
                }
            } catch (error) {
                console.error("Error sending message:", error);
            }
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            if (event.ctrlKey) {
                // Allow normal newline
                return;
            } else {
                event.preventDefault(); // Prevent new line
                handleSendMessage(); // Send the message
            }
        }
    };

    return (
        <>
            <div className={`${cl.chatContainer} ${chatStore.isOpen ? '' : cl.chatContainerClosed}`} >
                <div className={cl.tittleContainer}>
                    <button className={cl.closeChat} onClick={() => { chatStore.handleCloseChat() }}>
                        →
                    </button>
                    <div className={cl.tittle}>
                        AI-Ассистент
                    </div>
                </div>

                <div className={cl.textChatContainer}>
                    <Messages />
                </div>


                <div className={cl.inputContainer}>
                    <div className={cl.inputButtonContainer}>
                        <textarea
                            ref={textAreaRef}
                            placeholder={'Введите сообщение'}
                            className={cl.input}
                            value={value}
                            onKeyDown={handleKeyDown}
                            onChange={handleInputChange}
                            rows={1}
                        />
                        <button className={cl.buttonForInput} onClick={handleSendMessage}>
                            ↑
                        </button>
                    </div>
                </div>

            </div>

            <button
                className={`${cl.openChat} ${chatStore.isHideCloseChatButton ? cl.openChatIsOpen : ''}`}
                onClick={() => chatStore.handleOpenChat()}
            >
                AI-Ассистент
            </button>
        </>
    )
})

export default ChatContainer