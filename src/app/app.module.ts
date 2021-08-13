import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryFormComponent } from './forms/category-form/category-form.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CategoryListComponent } from './list/category-list/category-list.component';
import { HomeComponent } from './home/home.component';
import { WalletListComponent } from './list/wallet-list/wallet-list.component';
import { WalletFormComponent } from './forms/wallet-form/wallet-form.component';
import { MovementListComponent } from './list/movement-list/movement-list.component';
import { MovementFormComponent } from './forms/movement-form/movement-form.component';

const routes : Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'category-list', component: CategoryListComponent },
  { path: 'category-form', component: CategoryFormComponent },
  { path: 'wallet-list', component: WalletListComponent },
  { path: 'wallet-form', component: WalletFormComponent },
  { path: 'movement-list', component: MovementListComponent },
  { path: 'movement-form', component: MovementFormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CategoryFormComponent,
    CategoryListComponent,
    HomeComponent,
    WalletListComponent,
    WalletFormComponent,
    MovementListComponent,
    MovementFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
