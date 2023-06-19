import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { TasksComponent} from './pages/tasks/tasks.component'



const routes:Routes = [
  { path: '', component: LandingComponent },
  {path: 'mytasks', component: TasksComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  

 }
