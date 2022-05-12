import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cours } from '../cours';
import { CoursService } from '../cours.service';

@Component({
  selector: 'app-update-cours',
  templateUrl: './update-cours.component.html',
  styleUrls: ['./update-cours.component.scss']
})
export class UpdateCoursComponent implements OnInit {


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

  updateCours() {
    this.coursService.updateCours(this.id, this.cours)
      .subscribe(data => {
        console.log(data);
        this.cours = new Cours();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateCours();    
  }

  gotoList() {
    this.router.navigate(['/coursesj']);
  }
}