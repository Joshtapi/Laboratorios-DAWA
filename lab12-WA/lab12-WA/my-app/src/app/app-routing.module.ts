import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent }, 
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }, 
  { path: 'users', component: UserListComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'posts/:id', component: PostDetailsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
