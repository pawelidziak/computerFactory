import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Computer} from '../../classes/Computer';
import {GamingFactory} from '../../classes/factories/gaming-factory';
import {BusinessFactory} from '../../classes/factories/business-factory';
import {LogStation} from '../../classes/observer/log-station';
import {Observer} from '../../classes/observer/observer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy{
  private subscriptions: any[] = [];

  public computer: Computer;

  public log: LogStation;

  constructor() {
  }

  ngOnInit() {
    this.log = new LogStation();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  public createGamingSet(): void {
    this.computer = new GamingFactory().getComputer();
    console.log(this.computer.getDescription() + ' ' + this.computer.getPrice());
  }

  public createBusinessSet(): void {
    this.computer = new BusinessFactory().getComputer();
    console.log(this.computer.getDescription() + ' ' + this.computer.getPrice());
  }


}
