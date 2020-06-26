import { Component, OnInit, Input } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms'
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {

  searchForm: FormGroup; 
  value = "";


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      username: ''
    }); 
    this.searchForm.valueChanges.subscribe(console.log);
  }

}
