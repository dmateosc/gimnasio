import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { MuscleComponent } from './components/muscle/muscle.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { TrainingComponent } from './components/training/training.component';
import { ClassComponent } from './components/class/class.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarMenuComponent } from './components/navbar-menu/navbar-menu.component';
import { RouterLink } from '@angular/router';
import { DietaComponent } from './components/dietas/dieta/dieta.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MuscleComponent,
    ExerciseComponent,
    TrainingComponent,
    ClassComponent,
    LoginComponent,
    HomeComponent,
    CreateUserComponent,
    NavbarMenuComponent,
    DietaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RouterLink],
  bootstrap: [AppComponent]
})
export class AppModule { }
