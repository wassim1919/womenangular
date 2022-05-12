import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cours } from '../cours';
import { CoursService } from '../cours.service';

@Component({
  selector: 'app-cours-list',
  templateUrl: './cours-list.component.html',
  styleUrls: ['./cours-list.component.scss']
})
export class CoursListComponent implements OnInit {
  courses!: Observable<Cours[]>;

  constructor(private coursService: CoursService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.courses = this.coursService.getCoursesList();
  }
  
  coursDetails(cours_id: number){
    this.router.navigate(['coursedetail', cours_id]);
  }
  deleteCours(id: number) {
    this.coursService.deleteCours(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  confirmCours(id: number) {
    this.coursService.confirmCours(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  

}
