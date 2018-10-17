import {ComputerAccessory} from './computer-accessory';
import {Computer} from '../Computer';

export class Monitor extends ComputerAccessory {

  constructor(computer: Computer) {
    super();
    this.computer = computer;
    this.price = 500;
    setTimeout(() => this.computer.log.setLog(`Adding monitor`), 3000);
  }

  getPrice(): number {
    return this.computer.getPrice() + this.price;
  }

  getDescription(): string {
    return `${this.computer.getDescription()} Monitor (${this.price} PLN)`;
  }
}
