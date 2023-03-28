import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Data } from '../model';
import { ServicedataService } from '../service/servicedata.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit{
   angForm ! : FormGroup
   data_add  : any
   constructor(private fb : FormBuilder, private service: ServicedataService, private route:Router){}

  
   
   ngOnInit(): void {
       
       this.angForm = this.fb.group({
         name : ['', Validators.required],
         desc : ['', Validators.required],
         //image : ['', Validators.required],
         genre_movie : ['', Validators.required]
       })
       this.fetchData()
   }

   fetchData(){
    this.service.listGenre().subscribe(data =>{
      this.data_add = data
      console.log(data)
    })
   
}

postdata(data:any){
    this.service.Add(this.angForm.value).subscribe(data  =>{
      this.route.navigate([''])
    })
}


}
