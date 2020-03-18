import { Component, OnInit } from '@angular/core';
import { PrayerTimesService } from './../prayer-times.service';
import { PrayerTimesEntity } from './../dailyprayertimes';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-epic-prayer-widget',
  templateUrl: './epic-prayer-widget.component.html',
  styleUrls: ['./epic-prayer-widget.component.css']
})
export class EpicPrayerWidgetComponent implements OnInit {

  prayerTimesServiceResponse: PrayerTimesEntity;
  constructor(private prayerTimesService: PrayerTimesService) { }

  ngOnInit() {
    this.getEPICPrayerTimes();
  }

  getEPICPrayerTimes () {
    this.prayerTimesService.getPrayerTimes().subscribe({
      next(response) {
        this.prayerTimesServiceResponse = response.prayerTimes[0];
        console.log(this.prayerTimesServiceResponse.fajr);
      },
      error(err) {
        console.error('Error DailyPrayerTimes>>>>>>>>>>>>: ' , err);
      },
      complete() {
      }

    });
  }
}