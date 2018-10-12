import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Computer} from '../../classes/Computer';
import {AMDFactory} from '../../classes/factories/AMD-factory';
import {IntelFactory} from '../../classes/factories/intel-factory';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private subscriptions: any[] = [];

  public computer: Computer;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    const one = new Computer(1, new AMDFactory());
    const two = new Computer(2, new IntelFactory())

  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  public createAMDComputer(): void {
    this.computer = new Computer(this.generateSerialNumber(), new AMDFactory());
  }

  public createIntelComputer(): void {
    this.computer = new Computer(this.generateSerialNumber(), new IntelFactory());
  }


  private generateSerialNumber(): number {
    const max = 10000;
    const min = 0;
    return  Math.floor(Math.random() * (max - min) + min);
  }
}
