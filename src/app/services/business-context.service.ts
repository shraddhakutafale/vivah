import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessContextService {

  private businessIdSource = new BehaviorSubject<string | null>(null);
  businessId$ = this.businessIdSource.asObservable();

  setBusinessId(id: string) {
    this.businessIdSource.next(id);
  }

  getBusinessId(): string | null {
    return this.businessIdSource.value;
  }
}