import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {Computer} from '../../classes/Computer';
import {GamingComputer} from '../../classes/gaming-computer';
import {BusinessComputer} from '../../classes/business-computer';
import {UnknownComputer} from '../../classes/unknown-computer';
import {DockingStation} from '../../classes/accessories/docking-station';
import {Mouse} from '../../classes/accessories/mouse';
import {Monitor} from '../../classes/accessories/monitor';
import {Keyboard} from '../../classes/accessories/keyboard';
import {AccessoryType} from '../../core/fake-backend/accessory.type';
import {ComputerType} from '../../classes/computer-type';
import {CreateSetService} from './create-set.service';

@Component({
  selector: 'app-create-set',
  templateUrl: './create-set.component.html',
  styleUrls: ['./create-set.component.scss']
})
export class CreateSetComponent implements OnInit, OnChanges, OnDestroy {
  private subscriptions: any[] = [];

  @Input() computer: Computer;
  @Output() computerChange = new EventEmitter();

  public selectedComputerType = ComputerType.UNKNOWN;
  public computerTypes = [
    'UNKNOWN',
    'BUSINESS',
    'GAMING'
  ];

  public computerAccessories: any = [];

  constructor(private createSetService: CreateSetService) {
  }

  ngOnInit() {
    this.subscriptions.push(
      this.createSetService.getAccessories().subscribe(
        res => this.computerAccessories = res,
        error => console.log(error)
      )
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }


  ngOnChanges(changes: SimpleChanges): void {
    if(changes.computer.currentValue.type){
      this.selectedComputerType = changes.computer.currentValue.type
    }
    console.log(changes);
  }

  public emitComputerChange() {
    this.computerChange.emit(this.computer);
  }

  public createNewComputer(): void {
    this.computer = null;
    switch (this.selectedComputerType) {
      case ComputerType.GAMING:
        this.computer = new GamingComputer();
        break;
      case ComputerType.BUSINESS:
        this.computer = new BusinessComputer();
        break;
      case ComputerType.UNKNOWN:
        this.computer = new UnknownComputer();
        break;
    }
    this.emitComputerChange();
  }

  public addAccessory(accessoryType: AccessoryType): void {
    switch (accessoryType) {
      case AccessoryType.DOCKING_STATION:
        this.computer = new DockingStation(this.computer);
        break;
      case AccessoryType.KEYBOARD:
        this.computer = new Keyboard(this.computer);
        break;
      case AccessoryType.MONITOR:
        this.computer = new Monitor(this.computer);
        break;
      case AccessoryType.MOUSE:
        this.computer = new Mouse(this.computer);
        break;
    }
    this.emitComputerChange();
  }

}
