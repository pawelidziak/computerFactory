import {Computer} from './Computer';
import {ComputerType} from './computer-type';

export class BusinessComputer extends Computer {

  constructor() {
    super();
    this.type = ComputerType.BUSINESS;
    this.log.setLog('Business computer.');
  }

  getPrice(): number {
    return 3000;
  }

  getDescription(): string {
    return 'Business computer (3000)\n';
  }
}
