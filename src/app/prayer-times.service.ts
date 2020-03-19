import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { timeout } from 'rxjs/operators';

@Injectable()
export class PrayerTimesService {

  private madinaAppsUrl: string = 'https://services.madinaapps.com/kiosk-rest/clients/5/prayerTimes';

  constructor(private httpClient: HttpClient) { }

  getPrayerTimes(): Observable<any>{
    return this.httpClient.get<any>(
      this.madinaAppsUrl
    ).pipe(timeout (60000));
  }
}