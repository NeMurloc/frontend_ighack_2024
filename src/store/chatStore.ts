import { makeObservable, observable, action } from "mobx";

interface Message {
    text: string;
    isUser: boolean;
}

class ChatStore {
    isOpen: boolean;
    isHideCloseChatButton: boolean;

    messages: Message[] = [];

    constructor() {
        this.isOpen = false;
        this.isHideCloseChatButton = false;

        makeObservable(this, {
            isOpen: observable,
            isHideCloseChatButton: observable,
            messages: observable.deep,
            
            handleCloseChat: action,
            handleOpenChat: action,
            addMessage: action,
            addResponse: action,
        });
    }

    handleCloseChat() {
        this.isOpen = false;
        setTimeout(() => {
            this.isHideCloseChatButton = false;
        }, 500);
    }

    handleOpenChat() {
        this.isOpen = true;
        this.isHideCloseChatButton = true;
    }

    addMessage(message: string) {
        this.messages.push({ text: message, isUser: true });
    }

    addResponse(response: string) {
        this.messages.push({ text: response, isUser: false });
    }
}

const chatStore = new ChatStore();
export default chatStore;
