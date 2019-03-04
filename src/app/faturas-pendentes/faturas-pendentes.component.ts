import { Component, OnInit } from '@angular/core';
import { Fatura } from '../model/fatura';
import { FetchFaturasService } from '../fetch-faturas-service/fetch-faturas.service';

@Component({
  selector: 'app-faturas-pendentes',
  templateUrl: './faturas-pendentes.component.html',
  styleUrls: ['./faturas-pendentes.component.css']
})
export class FaturasPendentesComponent implements OnInit {

  faturas : Fatura[] = [];

  constructor(
    private fetchFaturasService: FetchFaturasService
  ) {
    this.faturas = [];
   }

  ngOnInit() {
    this.fetchFaturasService.fetchFaturasPendentesByInsertuser("manuel.meireles")
    .subscribe(faturas => this.faturas = faturas);
  }
}
