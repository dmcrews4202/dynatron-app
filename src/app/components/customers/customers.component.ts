import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) pagintor!: MatPaginator;

  customers: Customer[] = [];
  currentIndex = -1;

  constructor(
    private customerService: CustomerService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.getCustomers();


  }

  ngAfterViewInit(): void {
    //while (this.pagintor.pageIndex < this.pageIndex)
    //  this.pagintor.nextPage();
  }

  getCustomers(): void {
    this.customerService.getCustomers()
      .subscribe(customers => {
        this.customers = customers;
        this.length = this.customers.length;
        let page = sessionStorage.getItem('page');
        if (page != null) {
          let pageIndex = parseInt(page);
          this.pageIndex = pageIndex;
          //while (this.pagintor.pageIndex < this.pageIndex)
          //  this.pagintor.nextPage();
    
        }
        let data = sessionStorage.getItem('data');
        if (data != null) {
          let index = parseInt(data);
          this.currentIndex = index;
        }
        let firstCut = this.pageIndex * this.pageSize;
        let secondCut = firstCut + this.pageSize;
    
        this.activePageSlice = this.customers.slice(firstCut, secondCut);


    
      });

  }

  selectCustomer(index: number,customer: Customer) {
    this.storeCustomer(index,customer);
    this.router.navigate(['details',index]);
  }

  storeCustomer(index: number, customer: Customer) {
    sessionStorage.setItem('data',customer.id!.toString());
    sessionStorage.setItem('page',this.pageIndex.toString());
  }
  activePageSlice: Customer[] = [];

  pageEvent!: PageEvent;
  length = 0;
  pageSize = 10;
  pageIndex = 0;
  onPageChanged(e: PageEvent) {
    //this.currentIndex = -1;
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    let firstCut = e.pageIndex * e.pageSize;
    let secondCut = firstCut + e.pageSize;
    this.activePageSlice = this.customers.slice(firstCut, secondCut);
  }

}
