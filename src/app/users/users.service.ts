import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<Users[]>('http://localhost:3000/users');
  }

  createUser(data: Users) {
    return this.httpClient.post('http://localhost:3000/users', data);
  }

  getUserById(id: number) {
    return this.httpClient.get<Users>(`http://localhost:3000/users/${id}`);
  }

  updateUser(data: Users) {
    return this.httpClient.put<Users>(
      `http://localhost:3000/users/${data.id}`,
      data
    );
  }

  deleteUser(id: number) {
    return this.httpClient.delete<Users>(`http://localhost:3000/users/${id}`);
  }
}
