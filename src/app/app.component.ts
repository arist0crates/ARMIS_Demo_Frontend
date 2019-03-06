import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAaTHwQ8HCkkwcqDGcoNL114_lcQaI0DeU",
      authDomain: "armis-demo.firebaseapp.com",
      databaseURL: "https://armis-demo.firebaseio.com",
      projectId: "armis-demo",
      storageBucket: "armis-demo.appspot.com",
      messagingSenderId: "852969896415"
    };
    firebase.initializeApp(config);
  }

  title = 'armisDemoFrontend';
}
