import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { CustomersComponent } from './components/customers/customers.component';

const routes: Routes = [
  { path: '', redirectTo: '/customers', pathMatch: 'full'},
  { path: 'customers', component: CustomersComponent },
  { path: 'details/:id', component: CustomerDetailComponent },
  { path: 'add', component: CustomerAddComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
