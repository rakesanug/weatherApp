import { Component, OnInit, VERSION } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;

  loc$: Observable<string>;
  loc: string;
  constructor(private store: Store<any>) {
    this.loc$ = store.pipe(select("loc"));
    this.loc$.subscribe(loc => {
      this.loc = loc;
    });
  }

  ngOnInit() {
    console.log(VERSION);
  }
}
