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
 updateCandidate(value: any) {
    return this.restService.post('communitee/updatecandidate', value);
  }

   addUser(value: any) {
    return this.restService.post('communitee/adduser', value);
  }

   addCandidate(value: any) {
    return this.restService.post('communitee/addcandidate', value);
  }
    getCandidates(value?: any) {
    return this.restService.post('communitee/getcandidate', value);
  }
}
