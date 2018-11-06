import {AfterContentInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Computer} from '../../classes/Computer';
import {LogStation} from '../../classes/observer/log-station';
import {UnknownComputer} from '../../classes/unknown-computer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy, AfterContentInit{
  private subscriptions: any[] = [];

  public computer: Computer;

  public log: LogStation;

  constructor() {
  }

  ngOnInit() {
    this.log = new LogStation();
    this.computer = new UnknownComputer();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  ngAfterContentInit(): void {
  }
}
