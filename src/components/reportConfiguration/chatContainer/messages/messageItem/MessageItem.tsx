import cl from './MessageItem.module.css';

interface MessageItemProps {
    text: string;
    isUser: boolean;
}

const MessageItem: React.FC<MessageItemProps> = ({ text, isUser }) => {
    return (
        <div className={cl.container}>
            <div className={`${cl.textContainer} ${isUser ? cl.userTextContainer : cl.neuroTextContainer}`}>
                {text.split('\n').map((line, index) => (
                    <span key={index}>
                        {line}
                        <br />
                    </span>
                ))}
            </div>
        </div>
    );
};

export default MessageItem;
