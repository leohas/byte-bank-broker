import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge } from 'rxjs';
import { filter, switchMap, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { AcoesService } from 'src/app/services/acoes/acoes.service'

const ESPERA_DIGITACAO = 300

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent {
  acoesInput = new FormControl( );
  todasAcoes$ = this.acoesService.getAcoes().pipe(tap(() => console.log('Fluxo Inicial')))
  filtroPeloInput$ = this.acoesInput.valueChanges.pipe(
    debounceTime(ESPERA_DIGITACAO),
    tap(() => console.log('Fluxo do Filtro')),
    tap(() => console.log()),
    filter(valorDigitado => valorDigitado.length >= 3 || !valorDigitado.length),
    distinctUntilChanged(),
    switchMap(valorDigitado => this.acoesService.getAcoes(valorDigitado))
  )
  acoes$ = merge(this.todasAcoes$, this.filtroPeloInput$)

  constructor(private acoesService: AcoesService) {}

}
