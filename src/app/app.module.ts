import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileService } from './user-profile.service';
import { SearchComponent } from './search/search.component';
import { HttpModule } from '@angular/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { from } from 'rxjs';
import { NavbarComponent } from './navbar/navbar.component';
import { UserUppercasePipe } from './user-uppercase.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    SearchComponent,
    NotFoundComponent,
    NavbarComponent,
    UserUppercasePipe,
    HighlightDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [UserProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
