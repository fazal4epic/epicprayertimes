import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PrayerTimesService } from './prayer-times.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'EPIC Masjid Prayet Widget';
  prayerTimesServiceResponse: Observable<any>;

  constructor(private prayerTimesService: PrayerTimesService) {}

  ngOnInit(): void {
    this.getPrayerTimes();
  }

  getPrayerTimes(): void {
    this.prayerTimesService.getPrayerTimes()
       .subscribe(data => {
         console.log(data);
         this.prayerTimesServiceResponse = data;
         console.log(this.prayerTimesServiceResponse);
         });
  }
}
