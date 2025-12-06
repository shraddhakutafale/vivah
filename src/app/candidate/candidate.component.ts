import { Component, inject, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddCandidateComponent } from '../home/add-candidate/add-candidate.component';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {

  candidates: any[] = [];
  private readonly toast = inject(ToastrService);
  

  constructor(
    private modalService: NgbModal,
    
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getCandidates();
  }

  // Open Add Candidate modal
  selectPageCategory() {
    const modalRef = this.modalService.open(AddCandidateComponent, { centered: true, size: 'lg' });
    modalRef.result.then(
      (result) => {
        // Refresh candidate list after adding a new candidate
        this.getCandidates();
      },
      (reason) => {
        console.log(reason);
      }
    );
  }

getCandidates() {
  this.userService.getCandidates().subscribe({
    next: (res: any) => {
      this.candidates = res?.data || [];
    },
    error: (err) => {
      console.error('Failed to fetch candidates', err);
    }
  });
}


  // Fallback image if profile image fails
  onImgError(event: any) {
    event.target.src = 'assets/img/av2.jpg';
  }
}
