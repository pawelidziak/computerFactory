import {Computer} from './Computer';
import {ComputerType} from './computer-type';

export class BusinessComputer extends Computer {

  constructor() {
    super();
    this.type = ComputerType.BUSINESS;
    this.log.setLog('Creating business computer...');
  }

  getPrice(): number {
    return 3000;
  }

  getDescription(): string {
    return `Business computer (${this.getPrice()} PLN)`;
  }

  toString = () : string => {
    return `Business computer (serialNumber: ${this.serialNumber})`;
  }
}
