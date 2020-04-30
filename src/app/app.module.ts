import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FirstChildComponent} from './first-child/first-child.component';
import {SecondChildComponent} from './second-child/second-child.component';
import {RouterModule, Routes} from '@angular/router';
import {CanActivateService} from './services/guards/can-activate.service';


const routes: Routes = [
  {
    path: 'first',
    component: FirstChildComponent,
    // canActivate: [CanActivateService],
    // canDeactivate: [CanActivateService],
    // canActivateChild: []
  },
  {path: 'second', component: SecondChildComponent},
  // {path: 'second', component: SecondChildComponent, outlet: 'xxx'}
];

@NgModule({
  declarations: [
    AppComponent,
    FirstChildComponent,
    SecondChildComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
