import {ComputerAccessory} from './computer-accessory';
import {Computer} from '../Computer';

export class Mouse extends ComputerAccessory {

  constructor(computer: Computer) {
    super();
    this.computer = computer;
    this.accessoryPrice = 100;
    // setTimeout(() => this.computer.log.setLog(`Adding mouse`), 4000);
    this.computer.log.setLog(`Adding mouse`);
  }

  getPrice(): number {
    return this.computer.getPrice() + this.accessoryPrice;
  }

  getDescription(): string {
    return `${this.computer.getDescription()} Mouse (${this.accessoryPrice} PLN)`;
  }
}
