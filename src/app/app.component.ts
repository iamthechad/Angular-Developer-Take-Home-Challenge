import {Component} from "@angular/core";
import {AlertsService} from "./service/alerts.service";
import {animate, style, transition, trigger} from "@angular/animations";

/**
 * Application component
 */
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    trigger(
      "slideInOutAnimation",
      [
        transition(":enter", [
          style({transform: "translateX(100%)"}),
          animate("200ms ease-in", style({transform: "translateX(0%)"}))
        ]),
        transition(":leave", [
          animate("200ms ease-in", style({transform: "translateX(100%)"}))
        ])
      ]
    )
  ]
})
export class AppComponent {
  /**
   * ctor
   * @param alertsService Alerts Service - used in determining if the alerts slide out should be shown
   */
  constructor(public readonly alertsService: AlertsService) {
  }
}
