import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { ShowEmployeeComponent } from './show-employee/show-employee.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { OrderByComponent } from './order-by/order-by.component';
import { PipesComponent } from './pipes/pipes.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'article',
    component: ArticleComponent 
  },
  {
    path: 'data-binding',
    component: DataBindingComponent 
  },
  {
    path: 'directives',
    component: StructuralDirectivesComponent 
  },
  {
    path: 'ng-switch',
    component: NgSwitchComponent 
  },
  {
    path: 'pipes',
    component: PipesComponent 
  },
  {
    path: 'order-by',
    component: OrderByComponent 
  },
  {
    path: 'login',
    component: LoginComponent
  },  
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'show-employee',
    component: ShowEmployeeComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }