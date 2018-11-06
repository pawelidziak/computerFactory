import {Injectable} from '@angular/core';
import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {delay, dematerialize, materialize, mergeMap} from 'rxjs/operators';
import {DockingStation} from '../../classes/accessories/docking-station';
import {UnknownComputer} from '../../classes/unknown-computer';
import {Keyboard} from '../../classes/accessories/keyboard';
import {Monitor} from '../../classes/accessories/monitor';
import {Mouse} from '../../classes/accessories/mouse';
import {AccessoryDto} from './accessory-dto';
import {AccessoryType} from './accessory.type';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  private computerAccessories: AccessoryDto[] = [];

  constructor() {
    this.createAccessories();
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // wrap in delayed observable to simulate server api call
    return of(null).pipe(mergeMap(() => {

      if (request.url.endsWith('/computer-accessories') && request.method === 'GET') {
        if (this.computerAccessories.length) {
          return of(new HttpResponse({status: 200, body: this.computerAccessories}));
        } else {
          // return 404
          return throwError({error: {message: 'Not found'}});
        }
      }

      // pass through any requests not handled above
      return next.handle(request);

    }))

    // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());
  }


  private createAccessories() {
    const comp = new UnknownComputer();
    const dockingStation = new DockingStation(comp);
    const keyboard = new Keyboard(comp);
    const monitor = new Monitor(comp);
    const mouse = new Mouse(comp);

    this.computerAccessories.push({text: dockingStation.getDescription(), accessory: AccessoryType.DOCKING_STATION});
    this.computerAccessories.push({text: keyboard.getDescription(), accessory: AccessoryType.KEYBOARD});
    this.computerAccessories.push({text: monitor.getDescription(), accessory: AccessoryType.MONITOR});
    this.computerAccessories.push({text: mouse.getDescription(), accessory: AccessoryType.MOUSE});

    console.log(this.computerAccessories);
  }
}

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};

