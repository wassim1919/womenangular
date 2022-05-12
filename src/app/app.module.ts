import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { CoursListComponent } from './cours-list/cours-list.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { SujetListComponent } from './sujet-list/sujet-list.component';
import { CoursDetailsComponent } from './cours-details/cours-details.component';
import { UpdateCoursComponent } from './update-cours/update-cours.component';
import { QuizComponent } from './quiz/quiz.component';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { AddQuestionComponent } from './add-question/add-question.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
