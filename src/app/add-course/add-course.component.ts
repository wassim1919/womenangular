import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cours } from '../cours';
import { CoursService } from '../cours.service';
import { Sujet } from '../sujet';
import { SujetService } from '../sujet.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  cours: Cours = new Cours();
  sujet: Sujet = new Sujet();
  sujets!: Observable<Sujet[]>;
  submitted = false ;


  constructor(private coursService: CoursService,
    private router:Router, private sujetService: SujetService) { }

  ngOnInit(): void {
    this.reloadData();
  }
  newCours():void{
    this.submitted = false;
    this.cours = new Cours();
  }
  save(){
    this.coursService
    .createCours(this.cours).subscribe(data => {
      console.log(data)
      this.cours = new Cours();
      this.gotoList();
    },
    error => console.log(error));
  }
  onSubmit(){
    this.submitted = true;
    this.cours.sujet= this.sujet;
    this.save();
  }
  gotoList(){
    this.router.navigate(['/coursesj']);
  }
  reloadData() {
    this.sujets = this.sujetService.getSujetsList();

  }
  


}
