import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FetchFaturasService } from './fetch-faturas.service';


describe('FetchFaturasService', () => {
  let injector: TestBed;
  let service: FetchFaturasService;
  let httpMock: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FetchFaturasService]
    });
    injector = getTestBed();
    service = injector.get(FetchFaturasService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should return an Observable<Fatura[]>', () => {
    let testUser = "miguel.meireles";
    service.fetchFaturasPendentesByInsertuser(testUser).subscribe(faturas => {
      expect(faturas.length).toBe(1);
      console.log(faturas);
    });
  });

  it('should return an Observable<Fatura[]>', () => {
    let testUser = "miguel.meireles";
    service.fetchFaturasByInsertuser(testUser).subscribe(faturas => {
      expect(faturas.length).toBe(1);
      console.log(faturas);
    });
  });
});
