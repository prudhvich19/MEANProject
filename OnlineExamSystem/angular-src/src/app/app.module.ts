import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { QuestionsComponent } from './questions/questions.component';
import { TestsComponent } from './tests/tests.component';
import { TestDetailComponent } from './test-detail/test-detail.component';
import { WelcomeMainComponent } from './welcome-main/welcome-main.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CreateTestComponent } from './create-test/create-test.component';
import { TestCreateComponent } from './test-create/test-create.component';
import { TestEditComponent } from './test-edit/test-edit.component';
import { MustMatchDirective } from './validators/must-match.directive';

import { AuthAlways } from './guards/auth-always.guard';
import { AuthLoggedIn } from './guards/auth-loggedIn.quard';
import { SubjectDeleteComponent } from './subject-delete/subject-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    SubjectsComponent,
    QuestionsComponent,
    TestsComponent,
    TestDetailComponent,
    WelcomeMainComponent,
    RegisterComponent,
    LoginComponent,
    SearchBarComponent,
    CreateTestComponent,
    TestCreateComponent,
    TestEditComponent,
    MustMatchDirective,
    SubjectDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthAlways, AuthLoggedIn],
  bootstrap: [AppComponent]
})
export class AppModule { }
