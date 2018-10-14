import {ComputerAccessory} from './computer-accessory';
import {Computer} from '../Computer';

export class DockingStation extends ComputerAccessory {

  constructor(computer: Computer) {
    super();
    this.price = 1000;
    this.computer = computer;
    setTimeout(() => this.computer.log.setLog(`Adding ${this.getDescription()}`), 1000);
  }

  getPrice(): number {
    return this.computer.getPrice() + this.price;
  }

  getDescription(): string {
    return `Docking station (${this.price} PLN)`;
  }
}
