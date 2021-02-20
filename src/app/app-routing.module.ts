import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'sobre-mi', component:AboutComponent},
  {path: 'proyectos', component:ProjectsComponent},
  {path: 'crear-proyectos', component:CreateComponent},
  {path: 'contacto', component:ContactComponent},
  {path: 'proyecto/:id', component:DetailComponent},
  {path: 'editar-proyecto/:id', component:EditComponent},
  {path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
