import { Component, OnInit } from '@angular/core';
import { Claim } from '../claim';
import { Observable } from "rxjs";
import { ClaimService } from "./../claim.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-claim-list',
  templateUrl: './claim-list.component.html',
  styleUrls: ['./claim-list.component.scss']
})
export class ClaimListComponent implements OnInit {

 
  claims: Observable<Claim[]>;

  constructor(private claimService: ClaimService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.claims = this.claimService.getClaimsList();
  }

  deleteClaim(id: number) {
    this.claimService.deleteClaim(id)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error));
        this.reloadData();
  }

  
  
  claimDetails(id: number){
    this.router.navigate(['detailsc', id]);
  }

}
