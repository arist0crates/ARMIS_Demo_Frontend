import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Config } from 'config';
import { Observable } from 'rxjs';
import { Fatura } from '../model/fatura';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class FetchFaturasService {

  constructor(private http: HttpClient) { }

  fetchFaturasPendentesByInsertuser(insertUser:string) : Observable<Fatura[]> {
    return this.http.get<Fatura[]>(Config.fetchFaturasPendentesByInsertUserURL(insertUser), httpOptions);
  }

  fetchFaturasByInsertuser(insertUser:string) : Observable<Fatura[]> {
    return this.http.get<Fatura[]>(Config.fetchFaturasByInsertUserURL(insertUser), httpOptions);
  }
}
