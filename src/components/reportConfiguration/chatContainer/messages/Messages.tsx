import { observer } from 'mobx-react-lite';
import cl from './Messages.module.css';
import chatStore from '../../../../store/chatStore';
import MessageItem from './messageItem/MessageItem';

const Messages: React.FC = observer(() => {
    
    return (
        <div className={cl.container}>
            {chatStore.messages.length === 0 ? (
                <div className={cl.emptyMessageContainer}>
                    <div className={cl.emptyMessage}>
                        Задайте свой вопрос
                    </div>
                </div>
            ) : (
                <div className={cl.messagesContainer}>
                    {chatStore.messages.slice().reverse().map((message, index) => (
                        <div
                            key={index}
                            // className={`${cl.message} ${message.isUser ? cl.userMessage : cl.serverMessage}`}
                        >                            
                            <MessageItem text={message.text} isUser={message.isUser}/>                            
                        </div>
                    ))}                    
                </div>
            )}
        </div>
    );
});

export default Messages;
