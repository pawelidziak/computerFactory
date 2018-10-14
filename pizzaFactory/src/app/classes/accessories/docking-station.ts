import {ComputerAccessory} from './computer-accessory';
import {Computer} from '../Computer';

export class DockingStation extends ComputerAccessory {

  constructor(computer: Computer) {
    super();
    this.price = 1000;
    this.computer = computer;
    this.computer.log.setLog(`Adding docking station (${this.price})`);
  }

  getPrice(): number {
    return this.computer.getPrice() + this.price;
  }

  getDescription(): string {
    return `${this.computer.getDescription()}docking station (1000)\n`;
  }
}
