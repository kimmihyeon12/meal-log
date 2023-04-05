import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { BackButtonBarComponent } from "src/app/core/components/back-button-bar/backButtonBar.component";

@Component({
  selector: 'app-board-add',
  templateUrl: "boardAdd.page.html",
  imports: [
    IonicModule,
    CommonModule,
    BackButtonBarComponent
  ],
  standalone: true
})

export class BoardAddPage { }
