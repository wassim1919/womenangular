import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from '../question';
import { Quiz } from '../quiz';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {

  question: Question = new Question();
  quiz: Quiz = new Quiz();
  submitted = false ;
  xx: number;


  constructor(private route: ActivatedRoute,private quizService: QuizService,
    private router:Router) { }

  ngOnInit(): void {
    this.xx = this.route.snapshot.params['xx'];
    
  }
  
  save(){
    this.quizService
    .addQuestion(this.question).subscribe(data => {
      console.log(data)
      this.question = new Question();
      this.gotoList();
    },
    error => console.log(error));
  }
  onSubmit(){
    this.submitted = true;
    this.quiz.quiz_id=this.xx;
    this.question.quiz= this.quiz;
    this.save();
  }
  gotoList(){
    this.router.navigate(['/coursesj']);
  }
  
  


}