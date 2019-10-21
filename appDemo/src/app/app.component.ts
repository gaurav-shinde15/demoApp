import { Component } from '@angular/core';
import {User} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  successFlag:boolean;
  addNewUserFlag:boolean;
  alreadyExists:boolean;
  filteredItems=[];
  title = 'appDemo';
  searchedIndex;
  users = [
    { id: 1, name: 'Gaurav', mobile: '9863565613', email: 'gaurav@gmail.com'  },
    { id: 2, name: 'Sanket' , mobile: '9850497766', email: 'sanket@gmail.com'},
    { id: 3, name: 'Ravi' , mobile: '9236725613', email: 'ravi@gmail.com'},
    { id: 4, name: 'Avinash' , mobile: '9860124344', email: 'avinash@gmail.com' },
    { id: 5, name: 'Krushna' , mobile: '9860145251', email: 'krushna@gmail.com'},
    { id: 6, name: 'Yogesh' , mobile: '9860162467', email: 'yogesh@gmail.com'},
    { id: 7, name: 'Rohit' , mobile: '9860656464', email: 'rohit@gmail.com'}

  ];
  constructor() { }    
    
  ngOnInit() {
    this.assignCopy();
  } 
  assignCopy(){
    this.filteredItems = Object.assign([], this.users);
 }
  doSearch(number: string) {

    if (!number){
      this.addNewUserFlag=true;
    } else {
      for (var j=0; j<this.users.length; j++) {
        if (this.users[j].mobile.match(number)) {
          this.successFlag=true;
          this.searchedIndex=j;
          break;
        } else{
          this.successFlag=false;
        }

    }
    if (this.successFlag) {
      this.filteredItems=[];
      this.filteredItems.push(this.users[this.searchedIndex]);
      this.searchedIndex=null;
      this.addNewUserFlag=false;
    } else {
      this.addNewUserFlag=true;
    }
    }
  
  }
  addUser(usr,mob,email) {
    var isPresent = this.users.some(function(el){ return el.mobile === mob});
    if (!isPresent) {
      let id=this.users.length+1;
      let newUser = new User(id,usr,mob,email);
      this.users.push(newUser);
      this.addNewUserFlag=false;
      this.assignCopy();
    } else {
      this.alreadyExists=true;
    }
    
  }
  ListOfUsers() {
    this.alreadyExists=false;
    this.addNewUserFlag=false;
  }
}


