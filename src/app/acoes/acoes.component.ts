import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Acoes } from 'src/app/utils/types/acoes'

import { AcoesService } from 'src/app/services/acoes/acoes.service'

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent implements OnInit{
  acoesInput = new FormControl();
  acoes: Acoes

  constructor(private acoesService: AcoesService) {}

  ngOnInit(): void {
    this.acoesService.getAcoes().subscribe(retornoAPI => {
      this.acoes = retornoAPI.payload
    })
  }
}
