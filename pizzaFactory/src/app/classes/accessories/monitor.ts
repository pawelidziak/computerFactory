import {ComputerAccessory} from './computer-accessory';
import {Computer} from '../Computer';

export class Monitor extends ComputerAccessory {

  constructor(computer: Computer) {
    super();
    this.computer = computer;
    this.price = 500;
    this.computer.log.setLog(`Monitor (${this.price})`);
  }

  getPrice(): number {
    return this.computer.getPrice() + this.price;
  }

  getDescription(): string {
    return `${this.computer.getDescription()}monitor (500)\n`;
  }
}
