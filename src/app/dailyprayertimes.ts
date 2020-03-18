export interface DailyPrayerTimes {
  settings: Settings;
  prayerTimes?: (PrayerTimesEntity)[] | null;
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
  fajr: FajrOrDhuhrOrAsrOrMaghribOrIsha;
  sunrise: string;
  dhuhr: FajrOrDhuhrOrAsrOrMaghribOrIsha;
  asr: FajrOrDhuhrOrAsrOrMaghribOrIsha;
  maghrib: FajrOrDhuhrOrAsrOrMaghribOrIsha;
  isha: FajrOrDhuhrOrAsrOrMaghribOrIsha;
  juma: Juma;
  jumaTimes?: (JumaTimesEntity)[] | null;
}
export interface FajrOrDhuhrOrAsrOrMaghribOrIsha {
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