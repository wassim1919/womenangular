import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cours } from '../cours';
import { CoursService } from '../cours.service';

@Component({
  selector: 'app-cours-details',
  templateUrl: './cours-details.component.html',
  styleUrls: ['./cours-details.component.scss']
})
export class CoursDetailsComponent implements OnInit {

  id: number;
  cours: Cours;

  constructor(private route: ActivatedRoute,private router: Router,
    private coursService: CoursService) { }

  ngOnInit() {
    this.cours = new Cours();

    this.id = this.route.snapshot.params['id'];
    
    this.coursService.getCours(this.id)
      .subscribe(data => {
        console.log(data)
        this.cours = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['coursesj']);
  }

}
