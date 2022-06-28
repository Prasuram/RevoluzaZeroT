import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators,} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loginForm:FormGroup;
  constructor(
    private formBuilder:FormBuilder
  ) { }
  
 
  thankU =`Thank you for being part of the ZeroT.ai Revolution.
  Our ZTeam will keep you posted on exciting Launch Info Coming Soon...!`;
  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname:['',Validators.required],
      email: ['', Validators.required]
  });
  }

  onSubmit() {
    console.log("Submitted");
    
}
}
