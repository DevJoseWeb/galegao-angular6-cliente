import { Component, OnInit } from '@angular/core';
import { EstadoService } from '../estado.service';
import { Estado } from '../../models/estado.model';

import { TooltipPosition } from '@angular/material';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.scss']
})
export class EstadoComponent implements OnInit {

  @Input() estado: Estado;

  position = 'before';

  constructor(private estadoservice: EstadoService) { }

  ngOnInit() {
  }

}
