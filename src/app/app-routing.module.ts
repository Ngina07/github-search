import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
 { path: 'search', component: SearchComponent },
 { path: 'userprofile', component: UserProfileComponent},
 { path: '', redirectTo: "/search", pathMatch: "full" },
 { path: '**', component: NotFoundComponent }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }