import {ComputerAccessory} from './computer-accessory';
import {Computer} from '../Computer';

export class Keyboard extends ComputerAccessory {

  constructor(computer: Computer) {
    super();
    this.computer = computer;
    this.price = 150;
    this.computer.log.setLog(`Adding keyboard (${this.price})`);
  }

  getPrice(): number {
    return this.computer.getPrice() + this.price;
  }

  getDescription(): string {
    return `${this.computer.getDescription()}keyboard (150)\n`;
  }

}
