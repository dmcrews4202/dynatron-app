import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];
  currentIndex = -1;

  constructor(
    private customerService: CustomerService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.getCustomers();


  }

  getCustomers(): void {
    this.customerService.getCustomers()
      .subscribe(customers => {
        this.customers = customers;
        this.length = this.customers.length;
        this.activePageSlice = this.customers.slice(0, this.pageSize);
        let data = sessionStorage.getItem('data');
        if (data != null) {
          let index = parseInt(data);
          this.currentIndex = index;
        }
    
      });

  }

  selectCustomer(index: number) {
    this.storeCustomer(index);
    this.router.navigate(['details',index]);
  }

  storeCustomer(index: number) {
    sessionStorage.setItem('data',index.toString());
  }
  activePageSlice: Customer[] = [];

  pageEvent!: PageEvent;
  length = 0;
  pageSize = 10;
  pageIndex = 0;
  onPageChanged(e: PageEvent) {
    this.currentIndex = -1;
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    let firstCut = e.pageIndex * e.pageSize;
    let secondCut = firstCut + e.pageSize;
    this.activePageSlice = this.customers.slice(firstCut, secondCut);
  }

}
