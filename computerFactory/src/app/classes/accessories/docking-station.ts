import {ComputerAccessory} from './computer-accessory';
import {Computer} from '../Computer';

export class DockingStation extends ComputerAccessory {

  constructor(computer: Computer) {
    super();
    this.accessoryPrice = 1000;
    this.computer = computer;
    // setTimeout(() => this.computer.log.setLog(`Adding docking station`), 1000);
    this.computer.log.setLog(`Adding docking station`);
  }

  getPrice(): number {
    return this.computer.getPrice() + this.accessoryPrice;
  }

  getDescription(): string {
    return `${this.computer.getDescription()} Docking station (${this.accessoryPrice} PLN)`;
  }
}
