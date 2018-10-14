import {ComputerAccessory} from './computer-accessory';
import {Computer} from '../Computer';

export class Keyboard extends ComputerAccessory {

  constructor(computer: Computer) {
    super();
    this.computer = computer;
    this.price = 150;
    setTimeout(() => this.computer.log.setLog(`Adding ${this.getDescription()}`), 2000);
  }

  getPrice(): number {
    return this.computer.getPrice() + this.price;
  }

  getDescription(): string {
    return `Keyboard (${this.price} PLN)`;
  }

}
