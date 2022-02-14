import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

import { Acoes } from 'src/app/utils/types/acoes'

import { AcoesService } from 'src/app/services/acoes/acoes.service'

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent {
  acoesInput = new FormControl( );
  acoes$ = this.acoesService.getAcoes();

  constructor(private acoesService: AcoesService) {}

}
