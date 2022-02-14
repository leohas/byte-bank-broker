import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment';

const apiURL = environment.api

@Injectable({
  providedIn: 'root'
})
export class AcoesService {
  constructor(private httpClient: HttpClient) { }

  getAcoes() {
    return this.httpClient.get<any>(`${apiURL}/acoes`)
  }
}
