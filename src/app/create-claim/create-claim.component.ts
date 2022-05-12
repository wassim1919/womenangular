import { Component, OnInit } from '@angular/core';
import { Claim } from '../claim';
import { ClaimService } from '../claim.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-claim',
  templateUrl: './create-claim.component.html',
  styleUrls: ['./create-claim.component.scss']
})
export class CreateClaimComponent implements OnInit {

  claim: Claim = new Claim();
  submitted = false;

  constructor(private claimService: ClaimService,
    private router: Router) { }

  ngOnInit() {
  }

  newAppointment(): void {
    this.submitted = false;
    this.claim = new Claim();
  }

  save() {
    this.claimService.createClaim(this.claim).subscribe(data => {
      console.log(data)
      this.claim = new Claim();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/claims']);
  }

}
