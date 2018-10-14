import {Computer} from './Computer';
import {ComputerType} from './computer-type';

export class UnknownComputer extends Computer {

  constructor() {
    super();
    this.type = ComputerType.UNKNOWN;
    this.log.setLog('Unknown computer...');
  }

  getPrice(): number {
    return 0;
  }

  getDescription(): string {
    return 'Gaming computer (0)\n';
  }

}
