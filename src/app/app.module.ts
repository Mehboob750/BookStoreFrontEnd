import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterationComponent } from './Components/registeration/registeration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './Components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import {MatTableModule} from '@angular/material/table';
import { AddBookComponent } from './Components/add-book/add-book.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BookContentsComponent } from './Components/book-contents/book-contents.component';
import { UpdateBookComponent } from './Components/update-book/update-book.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterationComponent,
    LoginComponent,
    AdminDashboardComponent,
    ToolbarComponent,
    AddBookComponent,
    BookContentsComponent,
    UpdateBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
