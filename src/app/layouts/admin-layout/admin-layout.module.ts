import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoursListComponent } from 'src/app/cours-list/cours-list.component';
import { AddCourseComponent } from 'src/app/add-course/add-course.component';
import { SujetListComponent } from 'src/app/sujet-list/sujet-list.component';
import { CoursDetailsComponent } from 'src/app/cours-details/cours-details.component';
import { UpdateCoursComponent } from 'src/app/update-cours/update-cours.component';
import { QuizComponent } from 'src/app/quiz/quiz.component';
import { AddQuizComponent } from 'src/app/add-quiz/add-quiz.component';
import { QuizListComponent } from 'src/app/quiz-list/quiz-list.component';
import { AddQuestionComponent } from 'src/app/add-question/add-question.component';

// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    CoursListComponent,
    AddCourseComponent,
    SujetListComponent,
    CoursDetailsComponent,
    UpdateCoursComponent,
    QuizComponent,
    AddQuizComponent,
    QuizListComponent,
    AddQuestionComponent,
  ]
})

export class AdminLayoutModule {}
