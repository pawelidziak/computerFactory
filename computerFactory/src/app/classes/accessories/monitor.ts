import {ComputerAccessory} from './computer-accessory';
import {Computer} from '../Computer';

export class Monitor extends ComputerAccessory {

  constructor(computer: Computer) {
    super();
    this.computer = computer;
    this.accessoryPrice = 500;
    // setTimeout(() => this.computer.log.setLog(`Adding monitor`), 3000);
    this.computer.log.setLog(`Adding monitor`);
  }

  getPrice(): number {
    return this.computer.getPrice() + this.accessoryPrice;
  }

  getDescription(): string {
    return `${this.computer.getDescription()} Monitor (${this.accessoryPrice} PLN)`;
  }
}
