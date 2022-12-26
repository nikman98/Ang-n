import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { IbmplayerGuard } from './ibmplayer.guard';

import {MatDialogModule} from '@angular/material/dialog';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { NewsviewComponent } from './newsview/newsview.component';
import { NewsApiService } from './news-api.service';
import { RegisterComponent } from './register/register.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { CommentComponent } from './comment/comment.component';
import { CommentdispComponent } from './commentdisp/commentdisp.component';
import { SearchnewsComponent } from './searchnews/searchnews.component';
import { SearchdispComponent } from './searchdisp/searchdisp.component';
import{NgxPaginationModule} from 'ngx-pagination';
import { FooterComponent } from './footer/footer.component';
import { HeaderaftloginComponent } from './headeraftlogin/headeraftlogin.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { UpdateComponent } from './update/update.component';

// import { MatButtonModule, MatMenuModule, MatIconModule,
//   MatSidenavModule, MatListModule } from '@angular/material';


const myroute : Routes = [

  {
    path:'home',
    component:NewsviewComponent
  },

 

  {
    path:'login',
    component:LoginComponent
  },

  {
    path:'updatePG',
    component:UpdateComponent
  },

  
  {
    path:'register',
    component:RegisterComponent
  },

  {
    path:'favnews',
    component:FavoriteComponent
  },

  {
    path:'cmtdisp',
    component:CommentdispComponent,
    canActivate:[IbmplayerGuard],
  },

  {
    path:'cmt',
    component:CommentComponent
  },

  {
    path:'srch',
    component:SearchnewsComponent
  },


  {
    path:'srchdisp',
    component:SearchdispComponent
  },

  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[IbmplayerGuard],
    
  },
  
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    NewsviewComponent,
    RegisterComponent,
    FavoriteComponent,
    CommentComponent,
    CommentdispComponent,
    SearchnewsComponent,
    SearchdispComponent,
    FooterComponent,
    HeaderaftloginComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    NgxPaginationModule,
    RouterModule.forRoot(myroute)
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
