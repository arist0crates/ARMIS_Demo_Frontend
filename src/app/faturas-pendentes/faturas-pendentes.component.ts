import { Component, OnInit } from '@angular/core';
import { Fatura } from '../model/fatura';
import { FetchFaturasPendentesService } from '../fetch-faturas-pendentes-service/fetch-faturas-pendentes.service';

@Component({
  selector: 'app-faturas-pendentes',
  templateUrl: './faturas-pendentes.component.html',
  styleUrls: ['./faturas-pendentes.component.css']
})
export class FaturasPendentesComponent implements OnInit {

  faturas : Fatura[] = [];

  constructor(
    private fetchFaturasPendentesService: FetchFaturasPendentesService
  ) {
    this.faturas = [];
   }

  ngOnInit() {
    this.fetchFaturasPendentesService.fetchFaturasPendentesByInsertuser("manuel.meireles")
    .subscribe(faturas => this.faturas = faturas);
  }
}
