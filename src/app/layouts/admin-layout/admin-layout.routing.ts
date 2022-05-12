import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { CoursListComponent } from 'src/app/cours-list/cours-list.component';
import { AddCourseComponent } from 'src/app/add-course/add-course.component';
import { SujetListComponent } from 'src/app/sujet-list/sujet-list.component';
import { UpdateCoursComponent } from 'src/app/update-cours/update-cours.component';
import { CoursDetailsComponent } from 'src/app/cours-details/cours-details.component';
import { QuizComponent } from 'src/app/quiz/quiz.component';
import { AddQuizComponent } from 'src/app/add-quiz/add-quiz.component';
import { QuizListComponent } from 'src/app/quiz-list/quiz-list.component';
import { AddQuestionComponent } from 'src/app/add-question/add-question.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'coursesj',         component: CoursListComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'addcourse',         component: AddCourseComponent },
    { path: 'sujet',         component: SujetListComponent },
    { path: 'updatecourse/:id',         component: UpdateCoursComponent },
    { path: 'coursedetail/:id',         component: CoursDetailsComponent },
    { path: 'quiz/:xx',         component: QuizComponent },
    { path: 'addquiz/:xx',         component: AddQuizComponent },
    { path: 'showquiz/:xx',         component: QuizListComponent },
    { path: 'addquestion/:xx',         component: AddQuestionComponent },

];
