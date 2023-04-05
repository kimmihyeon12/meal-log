import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { IonicModule } from "@ionic/angular";

@Component({
  selector: 'app-board-body',
  templateUrl: 'boardBody.component.html',
  styleUrls: ['boardBody.component.scss'],
  imports: [
    CommonModule,
    IonicModule
  ],
  standalone: true
})
export class BoardBodyComponent { }
