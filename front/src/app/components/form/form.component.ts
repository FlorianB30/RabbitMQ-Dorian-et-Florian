import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../models/user.model';
import { PassService } from '../../services/pass-user-service';

@Component({
  selector: 'form-contain',
  standalone: true,
  imports: [FormsModule],
  providers: [UserService, PassService],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
    constructor(private userService : UserService, private passService: PassService) {}
    @Input() user: UserModel = {
        name: '',
        email: '',
        password: ''
    }

    @Output() isConnected: EventEmitter<boolean> = new EventEmitter<boolean>();

    register(SignUpForm: FormsModule) {
        this.userService.register(this.user);
    }

    async login(SignInForm: FormsModule) {
        this.passService.setIsConnected(await this.userService.login(this.user));
        this.isConnected.emit(this.passService.getIsConnected());
    }
}
