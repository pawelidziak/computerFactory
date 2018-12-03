import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IOrder} from '../result/result.component';
import {OrdersService} from '../../core/orders.service';
import {Computer} from '../../classes/Computer';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  @Input() computer: Computer;
  @Output() computerChange = new EventEmitter();
  public orders: IOrder[];

  constructor(private ordersService: OrdersService) {
  }

  ngOnInit() {
    this.getOrdersFromService();
  }

  private getOrdersFromService(): void {
    this.ordersService.getOrders().subscribe(
      res => this.orders = res,
      error => console.log(error)
    );
  }

  public makeOrder(): void {
    const order: IOrder = {
      desc: this.computer.getDescription(),
      date: new Date()
    };
    this.orders.push(order);
  }

  public saveAsFile(): void {
    this.ordersService.saveOrders(this.orders).subscribe(
      error => console.log(error)
    );
  }
}
