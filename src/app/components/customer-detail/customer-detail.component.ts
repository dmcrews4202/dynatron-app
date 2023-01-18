import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  @Input() customer?: Customer;

  

  constructor(
    private customerService: CustomerService, 
    private route: ActivatedRoute,
    private location: Location
    ) {}

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!,10);
    this.customerService.getCustomer(id).subscribe(customer => this.customer = customer);

  }

  save(): void {
    if (this.customer) {
      this.customerService.updateCustomer(this.customer)
        .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }
}
