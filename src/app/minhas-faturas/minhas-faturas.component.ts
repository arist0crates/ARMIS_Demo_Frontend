import { Component, OnInit } from '@angular/core';
import { Fatura } from '../model/fatura';
import { FetchFaturasService } from '../fetch-faturas-service/fetch-faturas.service';

@Component({
  selector: 'app-minhas-faturas',
  templateUrl: './minhas-faturas.component.html',
  styleUrls: ['./minhas-faturas.component.css']
})
export class MinhasFaturasComponent implements OnInit {

  faturas : Fatura[] = [];

  constructor(
    private fetchFaturasService: FetchFaturasService
  ) {
    this.faturas = [];
   }

  ngOnInit() {
    this.fetchFaturasService.fetchFaturasByInsertuser("manuel.meireles")
    .subscribe(faturas => this.faturas = faturas);
  }
}
