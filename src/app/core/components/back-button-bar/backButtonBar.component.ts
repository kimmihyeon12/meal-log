import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-button-bar',
  templateUrl: "backButtonBar.component.html",
  styleUrls: ['backButtonBar.component.scss'],
  imports: [
    IonicModule,
    CommonModule
  ],
  standalone: true
})

export class BackButtonBarComponent {
  constructor(
    private location: Location
  ) { }

  ngOnInit() { }

  onBack() {
    this.location.back();
  }

}