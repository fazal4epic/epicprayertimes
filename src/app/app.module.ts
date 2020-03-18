import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PrayerTimesService } from './prayer-times.service';
import { EpicPrayerWidgetComponent } from './epic-prayer-widget/epic-prayer-widget.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, EpicPrayerWidgetComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PrayerTimesService]
})
export class AppModule { }
