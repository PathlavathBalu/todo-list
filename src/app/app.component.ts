import { Component } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';
  userData: any = [];
  searchName:any;
  hobbies:any = [];

  userProfileForm = new FormGroup({
    name : new FormControl(),
    age :new FormControl(),
    gender : new FormControl(),
    hobbie : new FormControl(),
    Verified: new FormControl()
  });

  addData() {
    this.userData.push(this.userProfileForm.value);
  }
  addHobie() {
    this.hobbies.push(this.userProfileForm.value.hobbie);
  }
  removeHobie(hobie:any) {
   const index:number = this.hobbies.indexOf(hobie);
   if(index !== -1) {
     this.hobbies.splice(index, 1)
   }
  }

  //Delete user info
  deleteUserData(userInfo:any) {
    console.log('userInfo');
    const index:number = this.userData.indexOf(userInfo);
    if(index !== -1) {
      this.userData.splice(index, 1);
    }
  }
  filterByName(searchName:any) {
    console.log("add");
    this.userData = this.userData.filter((data:any) => {
      return data.name === searchName;
   });
  }
  resetForm() {
    this.userProfileForm.reset();
  }
}
