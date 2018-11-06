import {ComputerAccessory} from './computer-accessory';
import {Computer} from '../Computer';

export class Keyboard extends ComputerAccessory {

  constructor(computer: Computer) {
    super();
    this.computer = computer;
    this.accessoryPrice = 150;
    // setTimeout(() => this.computer.log.setLog(`Adding keyboard`), 2000);
    this.computer.log.setLog(`Adding keyboard`);

  }

  getPrice(): number {
    return this.computer.getPrice() + this.accessoryPrice;
  }

  getDescription(): string {
    return `${this.computer.getDescription()} Keyboard (${this.accessoryPrice} PLN)`;
  }

}
