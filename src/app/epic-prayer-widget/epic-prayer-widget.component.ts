import { Component, OnInit } from '@angular/core';
import { PrayerTimesService } from './../prayer-times.service';
import { DailyPrayerTimes } from './dailyprayertimes';

@Component({
  selector: 'app-epic-prayer-widget',
  templateUrl: './epic-prayer-widget.component.html',
  styleUrls: ['./epic-prayer-widget.component.css']
})
export class EpicPrayerWidgetComponent implements OnInit {

  prayerTimesServiceResponse: DailyPrayerTimes;
  constructor(private prayerTimesService: PrayerTimesService) { }

  ngOnInit() {
    this.prayerTimesService.getPrayerTimes().subscribe({
      next(response) {
        this.prayerTimesServiceResponse = response;
      },
      error(err) {
        console.error('Error DailyPrayerTimes>>>>>>>>>>>>: ' , err);
      },
      complete() {
      }

    });;
  }

}