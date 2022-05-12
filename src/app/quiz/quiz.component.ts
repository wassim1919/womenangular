import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first, Observable } from 'rxjs';
import { Question } from '../question';
import { QuizService } from '../quiz.service';
import { Reponse } from '../reponse';
import { User } from '../user';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  questions!: Observable<Question[]>;
  reponses!: Observable<Reponse[]>;
  reponse = new Reponse();
  question = new Question();
  temp = new Question();
  tempu = new User();
  submitted = false ;
  len : number = 0;
  xx:number;
  test: Question[];
  
  


  constructor(private route: ActivatedRoute,private quizService: QuizService,
    private router:Router) { }

  ngOnInit(): void {
    this.xx = this.route.snapshot.params['xx'];
    this.questions = this.quizService.getQuestionList(this.xx);
    this.reloadData();
    
    
    
  }
 
  
  onSubmit(){
    
    this.temp.q_id=this.question.q_id;
    this.reponse.question=this.temp;
    this.tempu.user_id=3
    this.reponse.user=this.tempu;

    console.log(this.reponse)
    this.save();
    
   
  }
  save(){
    this.quizService
    .createReponse(this.reponse).subscribe(data => {
      console.log(data)
      this.reponse = new Reponse();
      
      this.nextQuestion();
    },
    error => console.log(error));
  }
  
  reloadData() {
    
    this.questions
      .subscribe(data => {
        console.log(data)
        this.test = data;
        console.log(this.test)
        this.testi();
        
        
        console.log(this.test)
      }, error => console.log(error));
  }

  testi(){
    this.question=this.test.pop();
    console.log(this.question)
  }

  nextQuestion(){
    if(this.test.length>0){
    this.testi();
    }
    else {
      this.router.navigate(['/coursesj']);
    }
  }

}
