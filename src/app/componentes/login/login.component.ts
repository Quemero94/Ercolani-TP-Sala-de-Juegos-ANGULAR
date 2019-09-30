import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

import { Subscription } from "rxjs";
import { TimerObservable } from "rxjs/observable/TimerObservable";
import { NgForm } from "@angular/forms";
import { UsuarioModel } from "../../models/usuario.model";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();

  constructor() {}

  ngOnInit() {}

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }

    console.log(this.usuario);
    console.log(form);
  }
}
