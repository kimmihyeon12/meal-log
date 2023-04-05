import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ActionSheetController, IonicModule } from '@ionic/angular';

import { Observable } from 'rxjs';


import { BackButtonBarComponent } from 'src/app/core/components/back-button-bar/backButtonBar.component';
import { IFoodDetail } from 'src/app/interfaces/foods.type';
import { FoodsService } from 'src/app/services/foods.service';
import { FileStoreService } from 'src/app/services/fileStore.service';


@Component({
  selector: 'app-search-detail',
  templateUrl: 'searchDetail.page.html',
  imports: [IonicModule, CommonModule, BackButtonBarComponent, FormsModule],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SearchDetailPage implements OnInit {
  id?: number;
  selectedTime = 0

  foodDetail$?: Observable<IFoodDetail>

  formGroup: FormGroup = new FormGroup({
    uesr_id: new FormControl(null, [Validators.required]),
    food_id: new FormControl(null, [Validators.required]),
    photo: new FormControl(null),
    file: new FormControl(null),
    meal_time: new FormControl(null),
    meal_ev: new FormControl(null),
    servings: new FormControl(1),
    date: new FormControl() // 클릭날짜 얻어오기
  });

  mealTimeItem = ["아침", "점심", "저녁", "간식"]
  mealEveItem = ["균형잡힌", "탄수화물", "단백질", "지방", "폭식"]
  mealTime = [true, false, false, false]
  mealEv = [true, false, false, false, false]

  constructor(private route: ActivatedRoute, private foodsService: FoodsService, private actionSheetCtrl: ActionSheetController, private fileStoreService: FileStoreService) { }

  ngOnInit(): void {
    this.foodDetail$ = this.foodsService.foodDetail$;

    this.route.params.subscribe(params => {
      this.id = params['id']; // URL에서 받아온 값을 number 타입으로 변환하여 id 변수에 할당합니다.
    });
  }

  ngAfterViewInit(): void {
    this.foodsService.foodsFindOne(this.id!)
  }

  addServings() {
    this.formGroup.value.servings += 0.5
  }

  minusServings() {
    if (this.formGroup.value.servings <= 1) return;
    this.formGroup.value.servings -= 0.5
  }

  mealTimeToogle(index: number) {
    for (let i = 0; i < this.mealTime.length; i++) {
      if (i === index) {
        this.mealTime[i] = true
      } else {
        this.mealTime[i] = false
      }
    }
  }

  mealEvToogle(index: number) {
    this.mealEv[index] = !this.mealEv[index]
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      cssClass: 'action-sheet-custom',
      buttons: [
        {
          cssClass: 'btn-custom',
          icon: 'camera',
          text: '카메라',
          role: 'destructive',
          data: {
            action: 'delete',
          },
          handler: () => {
            // this.takeCamera()
          },
        },
        {
          cssClass: 'btn-custom',
          icon: 'images',
          text: '겔러리',
          data: {
            action: 'share',
          },
          handler: () => {
            this.takePhoto()
          },
        },

      ],
    });
    await actionSheet.present();
  }

  async takePhoto() {
    //   const image = await Camera.getPhoto({
    //     source: CameraSource.Photos,
    //     quality: 90,
    //     allowEditing: false,
    //     resultType: CameraResultType.Base64
    //   });

    //   this.formGroup.patchValue({
    //     photo: image.base64String
    //   });
    // };

    // async takeCamera() {
    //   const image = await Camera.getPhoto({
    //     source: CameraSource.Camera,
    //     quality: 200,
    //     allowEditing: false,
    //     resultType: CameraResultType.Base64
    //   });

    //   this.formGroup.patchValue({
    //     photo: image.base64String,
    //   });

    //   console.log(this.formGroup.value.photo);
  };

  store() {
    this.fileStoreService.upload(this.formGroup.value.photo)
  }
}