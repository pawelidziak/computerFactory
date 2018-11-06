import {Computer} from './Computer';
import {ComputerType} from './computer-type';

export class UnknownComputer extends Computer {

  constructor() {
    super();
    this.type = ComputerType.UNKNOWN;
  }

  getPrice(): number {
    return 1000;
  }

  getDescription(): string {
    return `Unknown computer (${this.getPrice()} PLN)`;
  }

  toString = () : string => {
    return `Unknown computer (serialNumber: ${this.serialNumber})`;
  }
}
