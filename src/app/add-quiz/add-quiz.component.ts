import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cours } from '../cours';
import { CoursService } from '../cours.service';
import { Quiz } from '../quiz';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.scss']
})
export class AddQuizComponent implements OnInit {

  cours: Cours = new Cours();
  quiz: Quiz = new Quiz();
  submitted = false ;
  xx: number;


  constructor(private route: ActivatedRoute,private coursService: QuizService,
    private router:Router, private sujetService: CoursService) { }

  ngOnInit(): void {
    this.xx = this.route.snapshot.params['xx'];
    
  }
  
  save(){
    this.coursService
    .createQuiz(this.quiz).subscribe(data => {
      console.log(data)
      this.quiz = new Quiz();
      this.gotoList();
    },
    error => console.log(error));
  }
  onSubmit(){
    this.submitted = true;
    this.cours.cours_id=this.xx;
    this.quiz.cours= this.cours;
    this.save();
  }
  gotoList(){
    this.router.navigate(['/coursesj']);
  }
  
  


}