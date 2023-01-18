import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent {

  model: Customer = {id: -1,firstName:'', lastName:'',email:'',created:Date.now(),updated:Date.now()}
  submitted = false;

  constructor(
    private customerService: CustomerService, 
    private location: Location
    ) {}

    onSubmit(): void {
      this.save();
    }

  save(): void {
    //validate
    //create customer
    
    //save
      this.customerService.addCustomer(this.model)
        .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
