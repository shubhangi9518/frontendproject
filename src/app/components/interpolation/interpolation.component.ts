import { Component } from '@angular/core';
import { Customer } from '../../models/customer';
import { Actor } from '../../models/actor';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css'
})
export class InterpolationComponent {

  userName:string="shubhangi";
  userEmail:string="shubh@gmail.com";

  num1=1;
  num2=2;

  Student={
    id:101,
    name:"shubhangi"

  }

  cust=new Customer(101,"anita",1000);

  act=new Actor(1,"vijay","gitagovinda");
}
