import {Computer} from './Computer';
import {ComputerType} from './computer-type';

export class UnknownComputer extends Computer {

  constructor() {
    super();
    this.type = ComputerType.UNKNOWN;
  }

  getPrice(): number {
    return 0;
  }

  getDescription(): string {
    return '';
  }

}
