import {ComputerAccessory} from './computer-accessory';
import {Computer} from '../Computer';

export class Mousepad extends ComputerAccessory {

  constructor(computer: Computer) {
    super();
    this.computer = computer;
    this.price = 20;
    this.computer.log.setLog(`Adding mousepad (${this.price})`);
  }

  getPrice(): number {
    return this.computer.getPrice() + this.price;
  }

  getDescription(): string {
    return `Mousepad (${this.price} PLN)`;
  }

}
