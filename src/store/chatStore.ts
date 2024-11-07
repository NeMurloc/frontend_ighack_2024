import { makeObservable, observable, action } from "mobx"; // Импорт функций MobX для создания наблюдаемых объектов и действий

// Интерфейс для описания структуры сообщения
interface Message {
    text: string; // Текст сообщения
    isUser: boolean; // Флаг, указывающий, является ли сообщение от пользователя
}

// Класс для управления состоянием чата
class ChatStore {
    isOpen: boolean; // Состояние чата (открыт или закрыт)
    isHideCloseChatButton: boolean; // Флаг, указывающий на скрытие кнопки закрытия чата

    messages: Message[] = []; // Массив сообщений чата
    responseIndex: number = 1; // Индекс для ответов нейронной сети

    constructor() {
        this.isOpen = false; // Изначально чат закрыт
        this.isHideCloseChatButton = false; // Изначально кнопка закрытия не скрыта

        // Делает свойства наблюдаемыми и действия доступными для MobX
        makeObservable(this, {
            isOpen: observable, // Наблюдаемое свойство
            isHideCloseChatButton: observable, // Наблюдаемое свойство
            messages: observable.deep, // Глубокое наблюдаемое свойство (для массивов объектов)
            responseIndex: observable, 
            
            handleCloseChat: action, // Действие для закрытия чата
            handleOpenChat: action, // Действие для открытия чата
            addMessage: action, // Действие для добавления сообщения
            addResponse: action, // Действие для добавления ответа            
        });
    }

    // Метод для закрытия чата
    handleCloseChat() {
        this.isOpen = false; // Установка состояния чата на закрытое
        setTimeout(() => {
            this.isHideCloseChatButton = false; // Скрытие кнопки закрытия через 500 мс
        }, 500);
    }

    // Метод для открытия чата
    handleOpenChat() {
        this.isOpen = true; // Установка состояния чата на открытое
        this.isHideCloseChatButton = true; // Скрытие кнопки закрытия
    }

    addResponse() {
        const responseText = `Сообщение от нейронной сети ${this.responseIndex}`;
        this.messages.push({ text: responseText, isUser: false });
        this.responseIndex += 1; // Увеличиваем индекс для следующего ответа
    }

    // Метод для добавления пользовательского сообщения
    addMessage(message: string) {
        this.messages.push({ text: message, isUser: true }); // Добавление сообщения в массив
        this.addResponse();
    }
}


const chatStore = new ChatStore();
export default chatStore; 
