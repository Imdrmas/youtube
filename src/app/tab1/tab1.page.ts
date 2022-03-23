import { Component } from '@angular/core';
import HomeData from '../../assets/data/HomeData.json';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  videos = [];
  segments: any[] = [];


  constructor() {
    this.segments = [
      'All',
      'New to you',
      'Gaming',
      'Sitcoms',
      'Computer program',
      'Documentary',
      'Music'
    ].map((val) => ({
      title: val,
      selected: false
    }));

    setTimeout(() => {
      this.selectSEgments(0);
      this.videos = HomeData;
    }, 1000);
  }
  selectSEgments(i) {
    this.segments.map((item) => {
      item.selected = false;
    });
    this.segments[i].selected = true;
  }

  doRefresh(event: any) {
    setTimeout(() => {
      event.target.complete();
    }, 1500)
  }
}
