import {Component, OnInit} from '@angular/core';
import {Observer} from '../../classes/observer/observer';
import {Subject} from '../../classes/observer/subject';
import {LogStation, OneLog} from '../../classes/observer/log-station';

@Component({
  selector: 'app-log-station',
  templateUrl: './log-station.component.html',
  styleUrls: ['./log-station.component.scss']
})
export class LogStationComponent implements OnInit, Observer {
  private subject: Subject;
  public logs: OneLog[] = [];

  constructor() {
    this.subject = LogStation.getInstance();
    this.subject.registerObserver(this);
  }

  ngOnInit() {
  }

  update(log: OneLog): void {
    this.logs.push(log);
  }

}
