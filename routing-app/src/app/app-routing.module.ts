import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { CanDeactivateGuardService } from './can-deactivate-guard.service';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerResolverService } from './server-resolver.service';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  // { path: '', component: HomeComponent},
  // { path: 'users', component: UsersComponent},
  // { path: 'users/:id/:name', component: UserComponent},
  // { path: 'servers', component: ServersComponent},
  // { path: 'servers/:id', component: ServerComponent},
  // { path: 'servers/:id/edit', component: EditServerComponent}
 
  { path: '', component: HomeComponent},
  { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent},
  ]},
  
  // { path: 'servers', canActivate:[AuthGuardService], component: ServersComponent, children: [
  //   { path: ':id', component: ServerComponent},
  //   { path: ':id/edit', component: EditServerComponent}

  // ]},
  { path: 'servers', canActivateChild:[AuthGuardService], component: ServersComponent, children: [
    { path: ':id', component: ServerComponent, resolve: {server: ServerResolverService}},
    { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuardService]}

  ]},

  {path: 'not-found', component: PageNotFoundComponent, data: {message: 'Additional Message'}},
  
  {path: '**', redirectTo: '/not-found', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
