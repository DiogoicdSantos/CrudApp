import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UsersService } from '../users.service';
import { Users } from '../users';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  constructor(private usersService: UsersService, private router: Router) {}

  formData: Users = {
    id: 0,
    name: '',
  };

  addUser() {
    this.usersService.createUser(this.formData).subscribe({
      next: (data) => {
        this.router.navigate(['/users/home']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
