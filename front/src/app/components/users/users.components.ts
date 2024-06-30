import { Component, Input, OnInit } from '@angular/core';
import { ConversationService } from '../../services/conversation.service';
import { FormsModule } from '@angular/forms';
import { MessageOutputModel } from '../../models/message.ouput.model';
import { MessageInputModel } from '../../models/message.input.model';
import { PassService } from '../../services/pass-user-service';
import { UserService } from '../../services/user.service';
import { UserInputModel } from '../../models/user.input.model';

@Component({
  selector: 'users-list',
  standalone: true,
  imports: [FormsModule],
  providers: [UserService, PassService],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  constructor(private userService: UserService, private passService: PassService) {}
  userId: number = this.passService.getUserId();
  userConvSelected: number = this.passService.getUserConversation();
  users!: UserInputModel[];

  ngOnInit(): void {
    this.getAllUsers();
  }

  async getAllUsers() {
    this.users = await this.userService.getAllUsers();
  }

  setIdUserConversation(id: number) {
    
    this.passService.setUserConversation(id);
    this.passService.refresh();
  }
}
