import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Computer} from '../../classes/Computer';
import {UnknownComputer} from "../../classes/unknown-computer";
import {Observer} from "../../classes/observer/observer";
import {LogStation, OneLog} from "../../classes/observer/log-station";
import {ComputerType} from "../../classes/computer-type";
import {BusinessComputer} from "../../classes/business-computer";
import {GamingComputer} from "../../classes/gaming-computer";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  private subject: any;

  @Input() computer: Computer;
  @Output() computerChange = new EventEmitter();

  constructor() {
    this.subject = LogStation.getInstance();
  }

  ngOnInit() {
  }

  resetComputer(): void {
    this.subject.setLog(`Reset computer`);
    if (this.computer.getType() === ComputerType.BUSINESS) {
      this.computer = new BusinessComputer();
    } else if (this.computer.getType() === ComputerType.GAMING) {
      this.computer = new GamingComputer();
    } else {
      this.computer = new UnknownComputer();
    }
    this.computerChange.emit(this.computer);
  }

}
