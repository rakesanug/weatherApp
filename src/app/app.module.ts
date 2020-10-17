import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { UvComponent } from "./uv/uv.component";
import { CurrentWeatherComponent } from "./current-weather/current-weather.component";
import { ForecastComponent } from "./forecast/forecast.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { TopBarComponent } from "./top-bar/top-bar.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from "@ngrx/store";
import { locationReducer } from "./locationReducer";
import { HttpClientModule } from "@angular/common/http";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from "@angular/material/tabs";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { AppRoutingModule } from "./AppRoutingModule";
import { WeatherService } from "../services/weather.service";
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    StoreModule.forRoot({
      loc: locationReducer
    }),
    FormsModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    HttpClientModule,
    MatDividerModule,
    MatListModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    UvComponent,
    CurrentWeatherComponent,
    ForecastComponent,
    HomePageComponent,
    TopBarComponent
  ],
  bootstrap: [AppComponent],
  providers: [WeatherService]
})
export class AppModule {}
