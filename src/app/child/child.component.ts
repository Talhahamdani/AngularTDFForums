import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{
  @Input() getdata :any ;
  formDatareceived: boolean = false;


  ngOnInit() {
    console.log('in child',this.getdata)
  }

  // myData()
  // {
  //   this.formDatareceived = true;
  //   console.log(this.getdata);
  //   // this.formDataSubmitted = true;
  // }
  // ngOnChanges() {
  //   console.log('My Input Data from parent:', this.getdata);
  //   this.formDataSubmitted = true;
  // }



}

