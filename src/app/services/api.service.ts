import { inject, Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly restService = inject(RestService);


getAllEventPaging(body: any): Observable<any> {
    return this.restService.post('event/getallpaging', body);
  }


}
