import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() clientes?:Cliente[];

  constructor() {
    setTimeout(() => {
      console.log(this.clientes);
    }, 10); 
    
  }

  ngOnInit(): void {
  }

}
