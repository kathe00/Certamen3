import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  @Input() clientes?:Cliente[];
  @ViewChild('nombre') nombres!: ElementRef;
  
  constructor(private renderer:Renderer2) { 
    setTimeout(() => {
      console.log(this.clientes);
      //this.cargarLista();
    }, 20); 
  }

  ngOnInit(): void {
  }

  cargarLista(){
  }

}
