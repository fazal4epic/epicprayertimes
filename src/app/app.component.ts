import { Component, OnInit } from '@angular/core';
import { PrayerTimesService, DailyPrayerTimes, PrayerTimesEntity, Fajr } from './prayer-times.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'EPIC Masjid Salah Widget';
  prayerTimesServiceResponse: any;

  constructor(private prayerTimesService: PrayerTimesService) {}

  ngOnInit(): void {
    this.getPrayerTimes();
    console.log(this.prayerTimesServiceResponse);
  }

  getPrayerTimes(): void {
    this.prayerTimesService.getPrayerTimes()
       .subscribe(response => this.prayerTimesServiceResponse = response);
  }
}
