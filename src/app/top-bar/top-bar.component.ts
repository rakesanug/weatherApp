import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { WeatherService } from "../../services/weather.service";
import { NgForm } from "@angular/forms";
import { SET_LOCATION } from "../locationReducer";

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.css"]
})
export class TopBarComponent implements OnInit {
  loc: string;
  constructor(private store: Store<any>) {}
  ngOnInit() {}
  search(searchForm: NgForm) {
    if (searchForm.invalid) {
      return;
    }
    this.store.dispatch({ type: SET_LOCATION, payload: this.loc });
  }
}
