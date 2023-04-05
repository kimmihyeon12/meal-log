import { CommonModule } from '@angular/common';
import { Component, EnvironmentInjector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'navs.page.html',
  styleUrls: ['navs.page.scss'],
  imports: [
    IonicModule,
    CommonModule
  ],
  standalone: true
})
export class NavsPage {
  constructor(public environmentInjector: EnvironmentInjector, private route: ActivatedRoute) { }

}
