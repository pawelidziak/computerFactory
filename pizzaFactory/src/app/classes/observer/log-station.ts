import {Subject} from './subject';
import {Observer} from './observer';

export interface OneLog {
  text: string;
  date: Date;
}

export class LogStation implements Subject {
  private log: OneLog;
  private observers: Observer[] = [];
  private static instance: LogStation;

  setLog(log: string): void {
    this.log = {
      text: log,
      date: new Date()
    };
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
      observer.update(this.log);
    }
  }

  public static getInstance(): LogStation {
    return this.instance || (this.instance = new this());
  }

}
