import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private subscriptions: any[] = [];

  public pizzaMenu: any[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getPizzaMenu();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  private getPizzaMenu(): void {
    this.subscriptions.push(
      this.http.get('/pizza-menu').subscribe(
        (res: any) => this.pizzaMenu = res,
        error => console.log(error)
      )
    );
  }
}
