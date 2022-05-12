import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Note } from '../note';
import { Quiz } from '../quiz';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {
  quizes!: Observable<Quiz[]>;
  xx:number;
  note: Note;

  constructor(private route: ActivatedRoute,private quizService: QuizService,
    private router: Router) { }

  ngOnInit(): void {
    this.xx = this.route.snapshot.params['xx'];
    this.reloadData();
  }
  reloadData() {
    this.quizes = this.quizService.getquizesList(this.xx);
  }
  correctionquiz(x:number){
    this.note = new Note();
    this.quizService.correctionQuiz(x)
      .subscribe(data => {
        console.log(data)
        this.note = data;
        console.log(this.note)
      }, error => console.log(error));

  }
  
  
  
  
  
  

}
