import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FetchFaturasPendentesService } from './fetch-faturas-pendentes.service';


describe('FetchFaturasPendentesService', () => {
  let injector: TestBed;
  let service: FetchFaturasPendentesService;
  let httpMock: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FetchFaturasPendentesService]
    });
    injector = getTestBed();
    service = injector.get(FetchFaturasPendentesService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should return an Observable<Fatura[]>', () => {
    let testUser = "miguel.meireles";
    service.fetchFaturasPendentesByInsertuser(testUser).subscribe(faturas => {
      expect(faturas.length).toBe(1);
      console.log(faturas);
    });
  });
});
