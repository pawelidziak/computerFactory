import {Computer} from './Computer';
import {ComputerType} from './computer-type';

export class GamingComputer extends Computer {

  constructor() {
    super();
    this.type = ComputerType.GAMING;
    this.log.setLog('Gaming computer.');
  }

  getPrice(): number {
    return 2000;
  }

  getDescription(): string {
    return 'Gaming computer (2000)\n';
  }

}
