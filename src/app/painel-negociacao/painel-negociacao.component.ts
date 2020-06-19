import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel-negociacao',
  templateUrl: './painel-negociacao.component.html',
  styleUrls: ['./painel-negociacao.component.css']
})
export class PainelNegociacaoComponent implements OnInit {

  oportunidades = [
    {descricao: 'Projeto 06', nomeProspecto: 'Francisco', valor: 1000},
    {descricao: 'Projeto 07', nomeProspecto: 'Raimundo', valor: 2000},

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
