import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MuscleComponent } from './components/muscle/muscle.component';
import { TrainingComponent } from './components/training/training.component';
import { UserComponent } from './components/user/user.component';
import { AuthenticationGuard } from './guards/authentication.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'create-user', component: CreateUserComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthenticationGuard], 
  children : [
  { path: 'muscle', component: MuscleComponent,  canActivate: [AuthenticationGuard]},
  { path: 'user/:id', component: UserComponent , canActivate: [AuthenticationGuard]},
  { path: 'exercise/:muscle', component: ExerciseComponent , canActivate: [AuthenticationGuard]},
  { path: 'training/:nickname', component: TrainingComponent , canActivate: [AuthenticationGuard]}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthenticationGuard]
})
export class AppRoutingModule {}
