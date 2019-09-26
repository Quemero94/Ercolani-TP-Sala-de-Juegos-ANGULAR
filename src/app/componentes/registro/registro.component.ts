import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
//para poder hacer las validaciones
//import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { UsuarioModel } from "../../models/usuario.model";
@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.css"]
})
export class RegistroComponent implements OnInit {
  /* constructor( private miConstructor:FormBuilder) { }
  email=new FormControl('',[Validators.email]);
  formRegistro:FormGroup=this.miConstructor.group({
    usuario:this.email
  });*/

  usuario: UsuarioModel;
  constructor() {}

  ngOnInit() {
    this.usuario = new UsuarioModel();

    this.usuario.email = "matiase@gmail.com";
  }

  onSubmit() {
    console.log("Formulario enviado");
    console.log(this.usuario);
  }
}
