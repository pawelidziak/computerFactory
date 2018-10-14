import {OneLog} from './log-station';

export interface Observer {
  update(log: OneLog): void;
}
