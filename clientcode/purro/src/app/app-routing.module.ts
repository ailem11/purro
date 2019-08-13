import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DevPageComponent } from './components/dev-page/dev-page.component';
import { SurveyResponseComponent } from './components/survey-response/survey-response.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SurveyResponseComponent
  },
  {
    path: 'dev-page',
    component: DevPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
