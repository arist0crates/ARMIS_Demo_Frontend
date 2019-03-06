import { Component, OnInit } from '@angular/core';
import { Fatura } from '../model/fatura';
import { FetchFaturasService } from '../fetch-faturas-service/fetch-faturas.service';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user';

@Component({
  selector: 'app-faturas-pendentes',
  templateUrl: './faturas-pendentes.component.html',
  styleUrls: ['./faturas-pendentes.component.css']
})
export class FaturasPendentesComponent implements OnInit {

  faturas: Fatura[] = [];
  currentUser: User;
  faturasPendentesPageNumber: number = 1;

  constructor(
    private authService: AuthService,
    private fetchFaturasService: FetchFaturasService
  ) {
    this.faturas = [];
    this.currentUser = new User("", "", "");
  }

  ngOnInit() {
    this.currentUser = this.authService.getSimpleUser();
    this.fetchFaturasService.fetchFaturasPendentesByInsertuser(this.currentUser.nome)
      .subscribe(faturas => this.faturas = faturas);
  }
}
