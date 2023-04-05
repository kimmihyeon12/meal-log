import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import * as moment from 'moment';

import { NavHomePage } from '../nav-home/navHome.page';

@Component({
  selector: 'app-nav-calender',
  templateUrl: 'navCalender.page.html',
  imports: [
    IonicModule,
    CommonModule,
  ],

  standalone: true
})
export class navCalenderPage {
  currentMonth: any;
  weeks: any[] = [];
  date: String = "오늘 하루"
  modal: any
  constructor(private modalCtrl: ModalController) {
    this.currentMonth = moment();
    this.loadCalendar();
  }

  ionViewWillLeave(): void {
    this.modal.dismiss({
      Animation: false
    });
  }
  ionViewDidEnter(): void {
    this.presentModal(this.currentMonth.format("D"), false)
  }

  async presentModal(day: string, animation: boolean) {

    let _year: String = this.currentMonth.format("YYYY")
    let _month: String = this.currentMonth.format("MM")
    let _day: String = this.currentMonth.format("D")
    if (day == _day) {
      this.date = "오늘 하루"
    } else {
      this.date = _year + "." + _month + "." + day
    }

    this.modal = await this.modalCtrl.create({
      animated: animation,
      cssClass: "my-custom-class",
      component: NavHomePage,
      componentProps: {
        date: this.date
      },
      breakpoints: [0, 0.3, 0.5, 1],
      initialBreakpoint: 0.38
    });
    await this.modal.present();
  }

  loadCalendar() {
    //일주일 단위로 저장
    let week: any[] = [];

    //총 날짜
    const totalDay = moment(this.currentMonth)
      .endOf('month')
      .date();

    //시작 일수 공백
    const firstDay = moment(this.currentMonth)
      .startOf('month')
      .day();

    //끝난 일수 공백
    const endDay = 7 - ((totalDay + firstDay) % 7)

    for (let i = 0; i < firstDay; i++) {
      week.push({});
    }
    for (let i = 1; i <= totalDay + endDay; i++) {
      if (i <= totalDay) {
        week.push({ day: i });
      } else {
        week.push({});
      }
      if (week.length === 7) {
        this.weeks.push(week);
        week = [];
      }
    }
    if (week.length > 0) {
      this.weeks.push(week);
    }
  }

  previousMonth() {
    this.currentMonth.subtract(1, 'month');
    this.weeks = [];
    this.loadCalendar();
  }

  nextMonth() {
    this.currentMonth.add(1, 'month');
    this.weeks = [];
    this.loadCalendar();
  }
}