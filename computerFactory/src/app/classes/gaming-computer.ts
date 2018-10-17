import {Computer} from './Computer';
import {ComputerType} from './computer-type';

export class GamingComputer extends Computer {

  constructor() {
    super();
    this.type = ComputerType.GAMING;
    this.log.setLog('Creating gaming computer...');
  }

  getPrice(): number {
    return 2000;
  }

  getDescription(): string {
    return `Gaming computer (${this.getPrice()} PLN)`;
  }

}
