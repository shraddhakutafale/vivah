import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectPageCategoryComponent } from './select-page-category/select-page-category.component';
import { Subscription } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { ApiService } from '../services/api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {



  constructor( private modalService: NgbModal) { }


   // Opens the modal for selecting page category
   selectPageCategory() {
    const modalRef = this.modalService.open(SelectPageCategoryComponent, { centered: true, size: 'lg' });
    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);
    });
  }



  events: any[] = [];
  filteredEvents: any[] = [];
  //  businessId: number = 0;
    businessSub!: Subscription;
    businessId = environment.businessId;
  uploadUrl = environment.uploadUrl;
  isLoading = true;
  // uploadUrl = environment.uploadUrl;
  defaultImage = '/img/about/about-1.webp';
  startDate: string = '';
  endDate: string = '';

  private readonly apiService = inject(ApiService);
  private readonly router = inject(Router);

  ngOnInit(): void {
    this.loadEvents();
  }


  /** ✅ Fetch events and sort by latest date & time */
 loadEvents() {
    this.isLoading = true;

    const params = {
      page: 1,
      perPage: 50,
      businessId: this.businessId     
    };

    this.apiService.getAllEventPaging(params).subscribe({
      next: (res: any) => {
        if (res?.data?.length) {
          let events = res.data.map((e: any) => ({
            ...e,

            profilePic:
              e.profilePic && e.profilePic.trim() !== '' && e.profilePic !== 'null'
                ? this.uploadUrl + e.profilePic
                : this.defaultImage,

            startDateObj: this.combineDateTime(e.startDate, e.startTime),

            shortDesc: e.eventDesc
              ? e.eventDesc.replace(/<[^>]*>/g, '').substring(0, 90) + '...'
              : ''
          }));

          // Sort by latest
          events = events.sort(
            (a: any, b: any) => b.startDateObj.getTime() - a.startDateObj.getTime()
          );

          this.events = events;
          this.filteredEvents = events;
        } else {
          this.events = [];
          this.filteredEvents = [];
        }

        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading events:', err);
        this.events = [];
        this.filteredEvents = [];
        this.isLoading = false;
      },
    });
  }



  /** ✅ Create a proper Date object combining date + time */
  private combineDateTime(date: string, time: string): Date {
    if (!date || date === '-' || date === 'null') return new Date(0);
    const hour = parseInt(time || '0', 10);
    return new Date(`${date}T${hour.toString().padStart(2, '0')}:00:00`);
  }

  /** ✅ Filter dynamically by selected date range */
  applyDateFilter() {
    if (!this.startDate && !this.endDate) {
      this.filteredEvents = this.events;
      return;
    }

    const start = this.startDate ? new Date(this.startDate) : new Date(0);
    const end = this.endDate ? new Date(this.endDate) : new Date(9999, 11, 31);

    this.filteredEvents = this.events.filter(
      (e) => e.startDateObj >= start && e.startDateObj <= end
    );
  }

  /** ✅ Reset filter and show all events */
  resetFilter() {
    this.startDate = '';
    this.endDate = '';
    this.filteredEvents = this.events;
  }
 
openEventDetail(event: any) {
  this.router.navigate(['/event-details'], {
    queryParams: {
      eventId: event.eventId,
      name: event.eventName,
      desc: event.eventDesc,
      img: event.profilePic,
      venue: event.venue,
      date: event.startDate,
      startTime: event.startTime,
      endTime: event.endTime
    }
  });
    window.scrollTo(0, 0);

}

  
}
