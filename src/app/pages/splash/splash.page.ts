import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { IonicModule } from "@ionic/angular";

@Component({
  selector: 'app-splash',
  templateUrl: 'splash.page.html',
  imports: [
    IonicModule,
    CommonModule,
  ],
  standalone: true
})

export class SplashPage { }