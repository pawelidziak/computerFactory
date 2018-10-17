import {ComputerFactory} from './computer-factory';
import {Computer} from '../Computer';
import {BusinessComputer} from '../business-computer';
import {Mouse} from '../accessories/mouse';
import {Keyboard} from '../accessories/keyboard';

export class BusinessFactory extends ComputerFactory {

  constructor() {
    super();
    this.computer = new BusinessComputer();
    this.addAccessories();
  }

  getComputer(): Computer {
    return this.computer;
  }

  addAccessories(): void {
    this.computer = new Mouse(this.computer);
    this.computer = new Keyboard(this.computer);
  }
}
