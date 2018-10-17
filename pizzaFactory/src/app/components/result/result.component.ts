import {Component, Input, OnInit} from '@angular/core';
import {Computer} from '../../classes/Computer';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  @Input() computer: Computer;

  constructor() { }

  ngOnInit() {
  }

}
