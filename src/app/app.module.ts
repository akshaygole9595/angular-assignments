import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OrderModule } from 'ngx-order-pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticleChildComponent } from './article-child/article-child.component';
import { FormsModule } from '@angular/forms';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { PipesComponent } from './pipes/pipes.component';
import { OrderByComponent } from './order-by/order-by.component';
import { AngularFormsComponent } from './angular-forms/angular-forms.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ShowEmployeeComponent } from './show-employee/show-employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; 



@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleChildComponent,
    DataBindingComponent,
    StructuralDirectivesComponent,
    NgSwitchComponent,
    PipesComponent,
    OrderByComponent,
    AngularFormsComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ShowEmployeeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    OrderModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
