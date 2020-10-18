import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { WeatherService } from "../../services/weather.service";
import { interval, Subscription } from "rxjs";

@Component({
  selector: "app-current-weather",
  templateUrl: "./current-weather.component.html",
  styleUrls: ["./current-weather.component.css"]
})
export class CurrentWeatherComponent implements OnInit {
  loc$: Observable<string>;
  loc: string;
  currentWeather: any = <any>{};
  msg: string;
  location: any;
  showDetails: boolean = false;
  isEdit: boolean = false;
  subscription: Subscription;
  isFirstTime: any = false;

  constructor(
    private store: Store<any>,
    private weatherService: WeatherService
  ) {
    // this.searchWeather("chennai")
  }
  ngOnInit() {}
  searchWeather() {
    console.log(new Date());
    this.msg = "";
    this.currentWeather = {};
    if (this.isFirstTime) {
      this.subscription.unsubscribe();
    }
    this.weatherService.getCurrentWeather(this.location).subscribe(
      res => {
        // console.log(res);
        this.isFirstTime = true;
        this.currentWeather = res;
        this.showDetails = true;
        this.isEdit = false;
        var source = interval(30000);
        this.subscription = source.subscribe(val => this.searchWeather());
      },
      err => {
        if (err.error && err.error.message) {
          // alert(err.error.message);

          this.msg = err.error.message;
          return;
        }
        this.subscription.unsubscribe();
        // alert("Failed to get weather.");
      },
      () => {}
    );
  }

  edit() {
    this.subscription.unsubscribe();

    this.showDetails = false;
    this.isEdit = true;
  }
}
