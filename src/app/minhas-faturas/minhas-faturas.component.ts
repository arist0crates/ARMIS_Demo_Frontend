import { Component, OnInit } from '@angular/core';
import { Fatura } from '../model/fatura';
import { FetchFaturasService } from '../fetch-faturas-service/fetch-faturas.service';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user';

@Component({
  selector: 'app-minhas-faturas',
  templateUrl: './minhas-faturas.component.html',
  styleUrls: ['./minhas-faturas.component.css']
})
export class MinhasFaturasComponent implements OnInit {

  faturas: Fatura[] = [];
  currentUser: User;
  minhasFaturasPageNumber: number = 1;
  
  constructor(
    private authService: AuthService,
    private fetchFaturasService: FetchFaturasService
  ) {
    this.faturas = [];
    this.currentUser = new User("", "", "");
  }

  ngOnInit() {
    this.currentUser = this.authService.getSimpleUser();
    this.fetchFaturasService.fetchFaturasByInsertuser(this.currentUser.nome)
      .subscribe(faturas => this.faturas = faturas);
  }
}
