import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UsersService } from '../users.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  allUsers: Users[] = [];
  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.usersService.getAll().subscribe((data) => {
      this.allUsers = data;
    });
  }

  deleteItem(id: number) {
    this.usersService.deleteUser(id).subscribe({
      next: (data) => {
        this.allUsers = this.allUsers.filter((user) => user.id != id);
      },
    });
  }

  updateItem(id: number) {
    this.router.navigate(['/users/edit', id]);
  }
}
