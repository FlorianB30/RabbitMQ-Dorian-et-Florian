import { MessageInputModel } from "../models/message.input.model";
import { MessageOutputModel } from "../models/message.ouput.model";

export class ConversationService {
    async getAllReceivedMessages(id: number, id2: number): Promise<MessageInputModel[]>  {

        const reponse = await fetch('http://localhost:3000/conversation/' + id + '+' + id2, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "GET"
        })

        const reponseJson = await reponse.json();

        console.log(reponseJson.conversation)

        return reponseJson.conversation
    }

    async sendNewMessage(message: MessageOutputModel) {
        const data: MessageOutputModel = {
            userId: message.userId,
            message: message.message,
            receiverId: message.receiverId
        }

        console.log(message.message)

        const reponse = await fetch('http://localhost:3000/send', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST", 
            body: JSON.stringify(data)
        })
    }
}