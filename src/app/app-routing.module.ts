import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccademyComponent } from './accademy/accademy.component';
import { CommentsComponent } from './comments/comments.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsComponent } from './forms/forms.component';
import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './projects/projects.component';
import { SignupComponent } from './signup/signup.component';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';

const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'dashboard',component:StudentdashboardComponent,
    children:[
        {path:'accamemy',component:AccademyComponent},
        {path:'contact',component:ContactsComponent},
        {path:'comment',component:CommentsComponent},
        {path:'form',component:FormsComponent},
        {path:'project',component:ProjectsComponent}    
    ]
}   
];

@NgModule({
 imports:[RouterModule.forRoot(routes)],
 exports:[RouterModule]
})
export class AppRoutingModule { }
