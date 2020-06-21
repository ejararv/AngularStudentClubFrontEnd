  
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { userservice} from './userservice'
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit  {
  customers: any;
  readonly MyURL = "https://localhost:44356/api/users"; 

  formdata:CustomersComponent;

  id: number;
  name: string;
  age: number;
 
  constructor(private http: HttpClient,private service: userservice,) { }
 
  ngOnInit() {
    let token = localStorage.getItem("jwt");
    this.http.get("https://localhost:44356/api/users", {
      headers: new HttpHeaders({
        "Accept": "application/json", "Content-Type": "application/json"
      },)
      
      
    }).subscribe(response => {
      this.customers = response;
    }, err => {
      console.log(err)
    });
  }

postuser(formdata: CustomersComponent ){ 
  return  this.http.post("https://localhost:44356/api/users", formdata
  )

}




 // resetForm(form?: NgForm) {
  //   if (form != null)
  //     form.form.reset();
  //   this.service.formData = {
  //     Id: 0,
  //     Name: '',
  //     Age: 0
      
  //   }
  // }





  insertRecord(form: NgForm) {
    let credentials = JSON.stringify(form.value)
    this.service.postusers().subscribe(
      res => {
        debugger;
        
        
        this.service.refreshList();
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }


  // deleteuser(){
  //   let token = localStorage.getItem("jwt");
  //   this.http.delete("https://localhost:44356/api/users", {
  //     headers: new HttpHeaders({
  //       "Accept": "application/json", "Content-Type": "application/json"
  //     },)
      
      
  //   }).subscribe(response => {
  //     this.customers = response  + this.customers.id + '/id' .remove();;
  //   }, err => {
  //     console.log(err)
  //   });
  // }




  

  Adduser(form: NgForm){
    let token = localStorage.getItem("jwt");
    this.http.post("https://localhost:44356/api/users", {
      headers: new HttpHeaders({
        "Accept": "application/json", "Content-Type": "application/json"
      },)
      
      
    }).subscribe(response => {
      this.customers = response;
    }, err => {
      console.log(err)
    });
  }

  


}