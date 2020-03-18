import { Component, OnInit } from '@angular/core';
import { PrayerTimesService } from './../prayer-times.service';
import { DailyPrayerTimes, PrayerTimesEntity, Fajr } from './../dailyprayertimes';
import { Hero } from './../Hero';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-epic-prayer-widget',
  templateUrl: './epic-prayer-widget.component.html',
  styleUrls: ['./epic-prayer-widget.component.css']
})
export class EpicPrayerWidgetComponent implements OnInit {

  prayerTimesServiceResponse: DailyPrayerTimes;
  prayerTimesEntity: PrayerTimesEntity;
  fajr: Fajr;

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor(private prayerTimesService: PrayerTimesService) { }

  ngOnInit() {
    this.getPrayerTimes();
    console.log(this.prayerTimesServiceResponse);
    this.prayerTimesEntity = this.getEPICPrayerTimesForToday();
    console.log(this.prayerTimesEntity);
    console.log('Fajr' + this.fajr);
  }

  getEPICPrayerTimesForToday(): PrayerTimesEntity {
    this.prayerTimesService.getPrayerTimes().subscribe({
      next(response) {
        console.log(response.prayerTimes[0]);
        prayerTimesServiceResponse => this.prayerTimesServiceResponse = prayerTimesServiceResponse
        return response.prayerTimes[0];
      },
      error(err) {
        console.error('Error DailyPrayerTimes>>>>>>>>>>>>: ' , err);
      },
      complete() {
      }
    });
  }

  getPrayerTimes(): void {
    this.prayerTimesService.getPrayerTimes()
       .subscribe(prayerTimesServiceResponse => this.prayerTimesServiceResponse = prayerTimesServiceResponse);
  }


}