import {ComputerAccessory} from './computer-accessory';
import {Computer} from '../Computer';

export class Mouse extends ComputerAccessory {

  constructor(computer: Computer) {
    super();
    this.computer = computer;
    this.price = 100;
    setTimeout(() => this.computer.log.setLog(`Adding mouse`), 4000);
  }

  getPrice(): number {
    return this.computer.getPrice() + this.price;
  }

  getDescription(): string {
    return `${this.computer.getDescription()} Mouse (${this.price} PLN)`;
  }
}
