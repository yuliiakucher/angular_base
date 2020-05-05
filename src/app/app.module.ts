import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {ActivatorService} from './services/activator.service';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {path: 'user/:id', component: UserComponent, canActivate: [ActivatorService]},
  {path: 'start', component: StartComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
