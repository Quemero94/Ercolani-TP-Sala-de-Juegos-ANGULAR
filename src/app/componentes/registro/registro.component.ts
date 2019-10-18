import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

import { UsuarioModel } from "../../models/usuario.model";
import { AuthService } from "../../servicios/auth.service";

import Swal from "sweetalert2";

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
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      type: "info",
      text: "Espere por favor..."
    });
    Swal.showLoading();

    this.auth.nuevoUsuario(this.usuario).subscribe(
      resp => {
        console.log(resp);
        Swal.close();
        this.router.navigateByUrl("/Principal");
      },
      err => {
        console.log(err.error.error.message);
        Swal.fire({
          type: "error",
          title: "Error al autenticar",
          text: err.error.error.message
        });
      }
    );
  }
}
