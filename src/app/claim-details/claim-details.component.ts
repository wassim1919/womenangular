import { Component, OnInit } from '@angular/core';

import { Claim } from '../claim';
import { Router, ActivatedRoute } from '@angular/router';
import { ClaimService } from '../claim.service';

@Component({
  selector: 'app-claim-details',
  templateUrl: './claim-details.component.html',
  styleUrls: ['./claim-details.component.scss']
})
export class ClaimDetailsComponent implements OnInit {

  id: number;
  claim: Claim;

  constructor(private route: ActivatedRoute,private router: Router,
    private claimService: ClaimService) { }

  ngOnInit() {
    this.claim = new Claim();

    this.id = this.route.snapshot.params['id'];
    
    this.claimService.getClaim(this.id)
      .subscribe(data => {
        console.log(data)
        this.claim = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['claims']);
  }

}
