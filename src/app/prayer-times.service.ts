import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { timeout } from 'rxjs/operators';

@Injectable()
export class PrayerTimesService {

  private madinaAppsUrl: string = 'https://services.madinaapps.com/kiosk-rest/clients/5/prayerTimes';

  constructor(private httpClient: HttpClient) { }

  getPrayerTimes(): Observable<DailyPrayerTimes>{
    return this.httpClient.get<DailyPrayerTimes>(
      this.madinaAppsUrl
    ).pipe(timeout (60000));
  }

  
}
export interface DailyPrayerTimes {
  settings: Settings;
  prayerTimes: PrayerTimesEntity;
}
export interface Settings {
  fajrLabel: string;
  dhuhrLabel: string;
  asrLabel: string;
  maghribLabel: string;
  ishaLabel: string;
  iqamahLabel: string;
  adhaanLabel: string;
  sunriseLabel: string;
  jumaLabel: string;
  showHijriDate: boolean;
}
export interface PrayerTimesEntity {
  id: number;
  date: string;
  hijriDate: string;
  displayDate: string;
  day: string;
  fajr: FajrTime;
  sunrise: string;
  dhuhr: DhuhrTime;
  asr: AsrTime;
  maghrib: MaghribTime;
  isha: IshaTime;
  juma: Juma;
  jumaTimes?: (JumaTimesEntity)[] | null;
}
export interface FajrTime {
  adhaanTime: string;
  iqamahTime: string;
  notes?: null;
}
export interface DhuhrTime {
  adhaanTime: string;
  iqamahTime: string;
  notes?: null;
}
export interface AsrTime {
  adhaanTime: string;
  iqamahTime: string;
  notes?: null;
}
export interface MaghribTime {
  adhaanTime: string;
  iqamahTime: string;
  notes?: null;
}
export interface IshaTime {
  adhaanTime: string;
  iqamahTime: string;
  notes?: null;
}
export interface Juma {
  juma1KhutbaTime: string;
  juma2KhutbaTime: string;
  juma3KhutbaTime?: null;
  juma1IqamahTime: string;
  juma2IqamahTime: string;
  juma3IqamahTime?: null;
  juma1Notes: string;
  juma2Notes: string;
  juma3Notes?: null;
}
export interface JumaTimesEntity {
  id: number;
  title: string;
  khutbaTime: string;
  iqamahTime: string;
  notes: string;
  locationLink: string;
}