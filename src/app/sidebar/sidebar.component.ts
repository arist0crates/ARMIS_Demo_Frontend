import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { User } from '../auth/user';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  currentUser : User;
  userEmail : string = "";
  userName : string = "";
  db : AngularFireDatabase;

  constructor(private authService: AuthService, db: AngularFireDatabase) {
    this.db = db;
    this.currentUser = new User("", "", "");
  }

  ngOnInit() {
  }

  isAuthenticated() {
    let result = this.authService.isAuthenticated();
    if (result == true && this.userEmail == ""){
      // var userId = firebase.auth().currentUser.uid;
      // this.currentUser = this.db.object('/users/' + userId).valueChanges();
      // this.userEmail = firebase.auth().currentUser.email;
      // this.userName = User.parseName(this.userEmail);
      this.currentUser = this.getCurrentUser();
    }
    return result;
  }

  getCurrentUser(){
    return this.authService.getSimpleUser();
  }
}
