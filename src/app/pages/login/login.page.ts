import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Component } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: "app-login",
  templateUrl: "login.page.html",
  imports: [
    IonicModule,
    CommonModule
  ],
  standalone: true
})

export class LoginPage {
  constructor(public loginService: LoginService) { }

  ngAfterViewInit() {
    this.loginService.init()
  }

}