import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template Driven form';
  formDatasend: boolean = false;
  isformSubmitted:boolean = false;
  userValue:any;

  onsubmit(value:any)
  {

    if (!value.invalid)
    {
      console.log('inparent',value)
      this.userValue = value.value;
      console.log(value);
      this.formDatasend = true;
      this.isformSubmitted = true
    }
  }


}
