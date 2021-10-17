import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './list/list.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CreteUsersComponent } from './crete-users/crete-users.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';

import { ViewSpecificUsersComponent } from './view-specific-users/view-specific-users.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

const routes: Routes = [


    {path:'list',component:ListComponent},
    {path:'users',component:CreteUsersComponent},
    {path:'view',component:ViewSpecificUsersComponent}
  
]
@NgModule({
  declarations: [
    AppComponent,ListComponent, CreteUsersComponent,ViewSpecificUsersComponent
  ],
  imports: [
    BrowserModule,MatTableModule, BrowserAnimationsModule,RouterModule.forRoot(routes),
    MatCardModule,MatButtonModule,MatFormFieldModule,MatIconModule,MatInputModule,MatRadioModule,MatOptionModule,MatSelectModule
    ,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
