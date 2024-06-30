import { Component, Input, OnInit } from '@angular/core';
import { ConversationService } from '../../services/conversation.service';
import { FormsModule } from '@angular/forms';
import { MessageOutputModel } from '../../models/message.ouput.model';
import { MessageInputModel } from '../../models/message.input.model';
import { PassService } from '../../services/pass-user-service';

@Component({
  selector: 'conversation',
  standalone: true,
  imports: [FormsModule],
  providers: [ConversationService, PassService],
  templateUrl: './conversation.component.html',
  styleUrl: './conversation.component.css'
})
export class ConversationComponent implements OnInit {
  constructor(private conversationService: ConversationService, private passService: PassService) {}
  
  messages!: MessageInputModel[];

  ngOnInit(): void {
    this.getAllReceivedMessages();
  }

  @Input() message: MessageOutputModel = {
    userId: this.passService.getUserId(), 
    message: '', 
    receiverId: this.passService.getUserConversation()
  }

  async getAllReceivedMessages() {
    this.messages = await this.conversationService.getAllReceivedMessages(this.passService.getUserId(), this.passService.getUserConversation());
  }

  async newMessage(MessageForm: FormsModule) {
    await this.conversationService.sendNewMessage(this.message);
    this.passService.refresh();
  }

  deconnexion() {
    this.passService.deconnection();
  }
}
