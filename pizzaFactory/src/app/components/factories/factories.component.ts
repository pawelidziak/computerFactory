import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {GamingFactory} from '../../classes/factories/gaming-factory';
import {BusinessFactory} from '../../classes/factories/business-factory';
import {Computer} from '../../classes/Computer';

@Component({
  selector: 'app-factories',
  templateUrl: './factories.component.html',
  styleUrls: ['./factories.component.scss']
})
export class FactoriesComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    this.computerChange.emit(this.computer);
  }
  @Input() computer: Computer;
  @Output() computerChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  public createGamingSet(): void {
    this.computer = new GamingFactory().getComputer();
    this.computerChange.emit(this.computer);
  }

  public createBusinessSet(): void {
    this.computer = new BusinessFactory().getComputer();
    this.computerChange.emit(this.computer);
  }
}
