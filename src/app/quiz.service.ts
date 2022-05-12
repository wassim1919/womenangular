import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private baseUrlq = 'http://localhost:8080/question';
  private baseUrlr = 'http://localhost:8080/reponse';
  private baseUrlrqq = 'http://localhost:8080/quiz';
  private baseUrlnote = 'http://localhost:8080/note';

  constructor(private http:HttpClient) { }


  getQuestionList(quiz_id: number): Observable<any> {
    return this.http.get(`${this.baseUrlq}/byquiz/?quiz_id=${quiz_id}`);
  }
 

  getReponseList(): Observable<any> {
    return this.http.get(`${this.baseUrlr}/all`);
  }
  
  createReponse(reponse:Object):Observable<Object>{
    return this.http.post(`${this.baseUrlr}/add/`, reponse);
  }
  createQuiz(cours:Object):Observable<Object>{
    return this.http.post(`${this.baseUrlrqq}/add/`, cours);
  }
  getquizesList(cours_id: number): Observable<any> {
    return this.http.get(`${this.baseUrlrqq}/bycours/?cours_id=${cours_id}`);
  }

  addQuestion(cours:Object):Observable<Object>{
    return this.http.post(`${this.baseUrlq}/add/`, cours);
  }
  

  correctionQuiz(quiz_id:number):Observable<any> {
    return this.http.get(`${this.baseUrlnote}/correction/?quiz_id=${quiz_id}&user_id=3`);
  }

  getquiznote(quiz_id:number, cours_id:number):Observable<any> {
    return this.http.get(`${this.baseUrlnote}/getqnote/?user_id=3&cours_id=${cours_id}&quiz_id=${quiz_id}&`);
  }


}
