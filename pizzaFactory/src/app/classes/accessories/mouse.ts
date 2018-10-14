import {ComputerAccessory} from './computer-accessory';
import {Computer} from '../Computer';

export class Mouse extends ComputerAccessory {

  constructor(computer: Computer) {
    super();
    this.computer = computer;
    this.price = 100;
    this.computer.log.setLog(`Mouse (${this.price})`);
  }

  getPrice(): number {
    return this.computer.getPrice() + this.price;
  }

  getDescription(): string {
    return `${this.computer.getDescription()}mouse (100)\n`;
  }
}
