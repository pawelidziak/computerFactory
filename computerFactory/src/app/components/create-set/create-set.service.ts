import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IOrder} from '../result/result.component';

@Injectable()
export class CreateSetService {

  constructor(private http: HttpClient) {
  }

  public getAccessories(): Observable<any[]> {
    return this.http.get<any[]>('/computer-accessories');
  }
}
