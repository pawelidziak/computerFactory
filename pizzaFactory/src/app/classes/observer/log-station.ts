import {Subject} from './subject';
import {Observer} from './observer';

export class LogStation implements Subject {
  private logs: string;
  private observers: Observer[] = [];
  private static instance: LogStation;

  setLog(log: string): void {
    console.log('ustawiam log ' + log);
    this.logs += `\n${log}`;
    this.notifyObservers();
  }

  registerObserver(o: Observer) {
    this.observers.push(o);
  }

  removeObserver(o: Observer) {
    const index = this.observers.indexOf(o);
    this.observers.splice(index, 1);
  }

  notifyObservers() {
    for (let observer of this.observers) {
      observer.update(this.logs);
    }
  }

  public static getInstance(): LogStation{
    return this.instance || (this.instance = new this());
  }

}
