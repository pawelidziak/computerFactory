import {ComputerFactory} from './computer-factory';
import {Computer} from '../Computer';
import {BusinessComputer} from '../business-computer';
import {Mouse} from '../accessories/mouse';
import {Keyboard} from '../accessories/keyboard';

export class BusinessFactory extends ComputerFactory {

  constructor() {
    super();
    this.computer = new BusinessComputer();
    setTimeout(()=> this.addAccessories(), 3000);
  }

  getComputer(): Computer {
    return this.computer;
  }

  addAccessories(): void {
    setTimeout(()=> this.computer = new Mouse(this.computer), 1000);
    this.computer = new Keyboard(this.computer);
  }
}
