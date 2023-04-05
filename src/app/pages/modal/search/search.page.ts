import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BackButtonBarComponent } from 'src/app/core/components/back-button-bar/backButtonBar.component';
import { TabRecipeComponent } from './tab-recipe/tabRecipe.component';
import { TabSearchComponent } from './tab-search/tabSearch.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  imports: [IonicModule, CommonModule, BackButtonBarComponent, TabRecipeComponent, TabSearchComponent, RouterLink],
  standalone: true
})

export class SearchPage {
  tabState: boolean = false

  tabToggle(state: boolean) {
    this.tabState = state
  }
}