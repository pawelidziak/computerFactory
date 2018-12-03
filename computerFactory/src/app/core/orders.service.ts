import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IOrder} from '../components/result/result.component';

@Injectable()
export class OrdersService {

  constructor(private http: HttpClient) {
  }

  public getOrders(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>('/get-orders');
  }

  public saveOrders(order: IOrder[]): Observable<any> {
    return this.http.post('/save-orders', order);
  }
}

