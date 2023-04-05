import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { BackButtonBarComponent } from "src/app/core/components/back-button-bar/backButtonBar.component";

@Component({
  selector: 'app-nav-my-detail',
  templateUrl: "profileUpdate.page.html",
  imports: [
    IonicModule,
    CommonModule,
    BackButtonBarComponent,
  ],
  standalone: true
})

export class ProfileUpdatePage { }
