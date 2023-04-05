import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Observable, debounceTime, fromEvent, tap } from 'rxjs';
import { IFoods } from 'src/app/interfaces/foods.type';
import { FoodsService } from 'src/app/services/foods.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-tab-search',
  templateUrl: 'tabSearch.component.html',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink],
})

export class TabSearchComponent implements OnInit {
  @ViewChild('foodSerchInput') foodSerchInput?: ElementRef<HTMLInputElement>;

  name: string = ""

  foods$?: Observable<IFoods[]>

  constructor(
    private foodsService: FoodsService,
  ) { }

  ngOnInit() {
    this.foods$ = this.foodsService.foods$;
  }

  ngAfterViewInit(): void {
    fromEvent(this.foodSerchInput!.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        tap((result: any) => {
          console.log(result.target.value)
          this.foodsService.foodsSearch(result.target.value)
        })
      ).subscribe();
  }

  onInputReset(foodSerchInput: HTMLInputElement) {
    foodSerchInput.value = '';
  }
}