import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PublicationsComponent} from './components/publications/publications.component';
import {HomeComponent} from './components/home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'publications',
    component: PublicationsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [
    RouterModule
  ],
  providers: []
})

export class AppRoutingModule {
}
