import { Component } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent {
  title = 'Detalle de cliente - información';
  numerotoken = '001';

  private readonly notifier: NotifierService;

  constructor( notifierService: NotifierService ) {
    this.notifier = notifierService;
  }

}

