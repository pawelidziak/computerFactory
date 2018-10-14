import {Component, Input, OnInit} from '@angular/core';
import {GamingFactory} from '../../classes/factories/gaming-factory';
import {BusinessFactory} from '../../classes/factories/business-factory';
import {Computer} from '../../classes/Computer';

@Component({
  selector: 'app-factories',
  templateUrl: './factories.component.html',
  styleUrls: ['./factories.component.scss']
})
export class FactoriesComponent implements OnInit {
  @Input() computer: Computer;

  constructor() { }

  ngOnInit() {
  }


  public createGamingSet(): void {
    this.computer = new GamingFactory().getComputer();
    // console.log(this.computer.getDescription() + ' ' + this.computer.getPrice());
  }

  public createBusinessSet(): void {
    this.computer = new BusinessFactory().getComputer();
    // console.log(this.computer.getDescription() + ' ' + this.computer.getPrice());
  }
}
