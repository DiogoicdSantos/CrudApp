import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Users } from '../users';
import { UsersService } from '../users.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent implements OnInit {
  constructor(
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  formData: Users = {
    id: 0,
    name: '',
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      let id = Number(param.get('id'));
      this.getById(id);
    });
  }

  getById(id: number) {
    this.usersService.getUserById(id).subscribe((data) => {
      this.formData = data;
    });
  }

  updateUser() {
    this.usersService.updateUser(this.formData).subscribe({
      next: (data) => {
        this.router.navigate(['/users/home']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
