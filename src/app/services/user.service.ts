import { inject, Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   protected readonly restService = inject(RestService);

createCandidate(value : any) {
  return this.restService.post('communitee/createcandidate', value);
}
}
