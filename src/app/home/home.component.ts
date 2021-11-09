import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { pairs } from 'rxjs';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  activeId=1;
  clientes = this.crearClientesPorDefecto();

  formulario:FormGroup;
  guardado:boolean = false;

  constructor(public form:FormBuilder) {  
    
    this.formulario = this.form.group({
      nombre:['',[Validators.required,Validators.maxLength(100)]],
      apellido:['',[Validators.required,Validators.maxLength(100)]],
      genero:['',Validators.required],
      pais:['',[Validators.required,Validators.pattern("^[a-zA-Z]*$")]],
      ciudad:['',[Validators.required,Validators.maxLength(100)]]
    });
  }

  ngOnInit(): void { }

  crearClientesPorDefecto(){

    let clientes:Cliente[] = [
      {nombre:"María", apellido:"Suarez", genero:1, pais:"Chile", ciudad:"Santiago", foto:"../../assets/mujer/1.jpg"},
      {nombre:"Alvaro", apellido:"Jimenez", genero:2, pais:"Chile", ciudad:"Concepción", foto:"../../assets/hombre/1.jpg"},
      {nombre:"Felipe", apellido:"Cabrera", genero:2, pais:"Chile", ciudad:"Santiago", foto:"../../assets/hombre/2.jpg"},
      {nombre:"Adelina", apellido:"Alvarado", genero:1, pais:"Chile", ciudad:"Valparaíso", foto:"../../assets/mujer/2.jpg"}
    ]

    return clientes;
  }

  agregarCliente(){
    //los datos ya fueron validados, así que guardamos en el arreglo.
    //primero definimos las variables en el formato para guardar
    let pais;
    switch(this.formulario.value.pais){
      case "ch" : pais = "Chile";
                  break;
      case "arg": pais = "Argentina";
                  break;
      case "pe" : pais = "Perú";
                  break;
      default : pais = "none";
    }

    //para la imagen, elegimos al hazar dependiendo del genero
    let nro = Math.floor(Math.random()*3+1);
    console.log(nro);

    let imagen:string = "...";
    if(this.formulario.value.genero == 1){
      imagen = ("../../assets/mujer/" + nro + ".jpg");
    }else{
      if(this.formulario.value.genero == 2){
        imagen = ("../../assets/hombre/" + nro + ".jpg");
      }else{
        if(this.formulario.value.genero == 3){
          imagen = ("../../assets/otro/" + nro + ".jpg");
        }
      }
    }

    //creamos el cliente
    let cliente:Cliente = {
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      genero: this.formulario.value.genero,
      pais: pais,
      ciudad: this.formulario.value.ciudad,
      foto: imagen
    }

    console.log(cliente);

    //y lo agregamos a la lista
    this.clientes.push(cliente);

    //
    console.log(this.formulario.value);
    //limpiar el formulario
    this.formulario.reset();
    //mostrar mensaje
    this.guardado = true;
    window.scroll(0,0);
  }

}
