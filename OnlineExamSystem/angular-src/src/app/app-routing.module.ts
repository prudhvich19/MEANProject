import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionsComponent } from './questions/questions.component';
import { SubjectsComponent} from './subjects/subjects.component';
import { TestsComponent} from './tests/tests.component';
import { AppComponent } from './app.component';
import { WelcomeMainComponent } from './welcome-main/welcome-main.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TestDetailComponent } from './test-detail/test-detail.component';
import { TestCreateComponent } from './test-create/test-create.component';
import { TestEditComponent } from './test-edit/test-edit.component';
import { SubjectDeleteComponent } from './subject-delete/subject-delete.component';

import { AuthAlways } from './guards/auth-always.guard';
import { AuthLoggedIn } from './guards/auth-loggedIn.quard';
import {AuthChildrenAlways } from './guards/auth-children.quard';

const routes: Routes = [
    {path: '', component: WelcomeMainComponent, canActivate: [AuthAlways]},
    { path: 'register', component: RegisterComponent, canActivate: [AuthAlways]},
    { path: 'login', component: LoginComponent, canActivate: [AuthAlways]},
    {path: 'home', component: DashboardComponent, canActivate: [AuthLoggedIn, AuthAlways]},
    {path: 'subjects', component: SubjectsComponent, canActivate: [AuthLoggedIn, AuthAlways]},
    {path: 'subjects/subjectDelete', component: SubjectDeleteComponent, canActivate: [AuthLoggedIn, AuthAlways]},
    {path: 'questions', component: QuestionsComponent, canActivate: [AuthLoggedIn, AuthAlways]},
    {path: 'tests', component: TestsComponent, canActivate: [AuthLoggedIn, AuthAlways]},
    {path: 'tests/testDetails', component: TestDetailComponent, canActivate: [AuthLoggedIn, AuthAlways] },
    {path: 'tests/create', component: TestCreateComponent, canActivate: [AuthLoggedIn, AuthAlways] },
    {path: 'tests/edit', component: TestEditComponent, canActivate: [AuthLoggedIn, AuthAlways] },

];

const routes1: Routes = [
  {path: '', component: WelcomeMainComponent, canActivate: [AuthAlways]},
  { path: 'register', component: RegisterComponent, canActivate: [AuthAlways]},
  { path: 'login', component: LoginComponent, canActivate: [AuthAlways]},
  {path: 'home', component: DashboardComponent, canActivate: [AuthLoggedIn, AuthAlways]},
  {path:  'subjects', component: SubjectsComponent, canActivate: [AuthLoggedIn, AuthAlways],
  canActivateChild: [AuthChildrenAlways],
  children: [
    {path: 'subjectDelete', component: SubjectDeleteComponent, canActivate: [AuthLoggedIn, AuthAlways]}
  ]
  },
  {path: 'questions', component: QuestionsComponent, canActivate: [AuthLoggedIn, AuthAlways]},
  {path: 'tests', component: TestsComponent, canActivate: [AuthLoggedIn, AuthAlways],
  canActivateChild: [AuthChildrenAlways],
  children: [
    {path: 'testDetails', component: TestDetailComponent, canActivate: [AuthLoggedIn, AuthAlways] },
    {path: 'create', component: TestCreateComponent, canActivate: [AuthLoggedIn, AuthAlways] },
    {path: 'edit', component: TestEditComponent, canActivate: [AuthLoggedIn, AuthAlways] },
    ]
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule { }
