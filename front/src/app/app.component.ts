import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ConversationComponent } from './components/conversation/conversation.component';
import { FormsModule } from '@angular/forms';
import { PassService } from './services/pass-user-service';
import { UsersComponent } from './components/users/users.components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, ConversationComponent, UsersComponent],
  providers: [PassService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private passService: PassService) {}
  
  title = 't1-front';
  isConnected: boolean = this.passService.getIsConnected();

  handleIsConnected(event: boolean) {
    this.isConnected = event;
  }
}
