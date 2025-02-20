import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SelectPageCategoryComponent } from './select-page-category/select-page-category.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {



  constructor(private router: Router, private modalService: NgbModal) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

   // Opens the modal for selecting page category
   selectPageCategory() {
    const modalRef = this.modalService.open(SelectPageCategoryComponent, { centered: true, size: 'lg' });
    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);
    });
  }

}
