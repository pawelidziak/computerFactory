import {ComputerType} from './computer-type';
import {LogStation} from './observer/log-station';

export abstract class Computer {
  serialNumver: number;
  type: ComputerType = ComputerType.UNKNOWN;
  log: LogStation;

  constructor() {
    this.log = LogStation.getInstance();
  }

  getType(): ComputerType {
    return this.type;
  }

  abstract getPrice(): number;

  abstract getDescription(): string;

}
