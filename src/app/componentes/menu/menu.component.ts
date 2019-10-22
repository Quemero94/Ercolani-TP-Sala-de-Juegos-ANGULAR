import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { AuthService } from "../../servicios/auth.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {}

  Juego(tipo: string) {
    switch (tipo) {
      case "Adivina":
        this.router.navigate(["/Juegos/Adivina"]);
        break;
      case "Agilidad":
        this.router.navigate(["/Juegos/Agilidad"]);
        break;
      case "AdivinaMasListado":
        this.router.navigate(["/Juegos/AdivinaMasListado"]);
        break;
      case "AgilidadaMasListado":
        this.router.navigate(["/Juegos/AgilidadaMasListado"]);
        break;
    }
  }

  salir() {
    this.auth.logout();
    this.router.navigateByUrl("/Login");
  }
}
