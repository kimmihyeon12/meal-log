import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BoardBodyComponent } from 'src/app/core/components/board-body/boardBody.component';
import { BoardFoodComponent } from 'src/app/core/components/board-food/boardFood.component';

@Component({
  selector: 'app-tab-my',
  templateUrl: 'navMy.page.html',
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterLink,
    BoardBodyComponent,
    BoardFoodComponent
  ],
  standalone: true
})
export class NavMyPage {
  tabState: boolean = false

  tabToggle(state: boolean) {
    this.tabState = state
  }
}
