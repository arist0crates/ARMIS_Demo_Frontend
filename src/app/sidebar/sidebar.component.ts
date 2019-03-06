import { Component, OnInit } from '@angular/core';
import { User } from '../auth/user';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  currentUser : User;

  constructor(private authService: AuthService) {
    this.currentUser = new User("Dummy Email", null, "Dummy Name");
  }

  ngOnInit() {
  }

  isAuthenticated() {
    let result = this.authService.isAuthenticated();
    // if (result == true){
    //   this.currentUser = this.getCurrentUser();
    //   console.log(this.currentUser.nome);
    //   console.log(this.currentUser.papel);
    // }
    return result;
  }

  getCurrentUser(){
    return this.authService.getCurrentUser();
  }
}
