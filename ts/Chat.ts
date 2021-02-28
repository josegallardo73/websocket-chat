const fs = require('fs').promises;

export class Chat {
    private messages:object[];
    constructor() {
        this.messages = [];
    }

    getMessages = () => {
        if(this.messages.length > 0) return this.messages;
        else return 'No hay mensajes';
    }

    setMessages = (newMessage:object) => {
        this.messages.push (newMessage);
    }

    writeMessage = async () => {
        try {
            await fs.writeFile('ts/public/messages.txt', JSON.stringify(this.messages), 'utf8')
        }catch(err) {
            console.log(err);
        }
    }
}