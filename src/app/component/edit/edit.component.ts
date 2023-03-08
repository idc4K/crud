import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicedataService } from '../service/servicedata.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  angForm ! : FormGroup
  data_add  : any
  id : any
  id_genre : any
  constructor(private fb : FormBuilder, private service: ServicedataService, private route:Router, private activeR:ActivatedRoute){}

  
  ngOnInit(): void {
      
      this.angForm = this.fb.group({
        name : ['', Validators.required],
        desc : ['', Validators.required],
        //image : ['', Validators.required],
        genre_movie : ['', Validators.required]
      })
      //this.fetchData()
      this.getSingle()
     
  }

  fetchData(){
    this.activeR.paramMap.subscribe(paramsId =>{
      this.id_genre = paramsId.get('id')
      this.service.getByIDGenre(this.id_genre).subscribe(data =>{
        this.data_add = data
        console.log(data)
      })
      
      
    })
}



getSingle(){
  this.activeR.paramMap.subscribe(ParamsId =>{
    this.id = ParamsId.get('id')
    console.log(this.id)
    this.service.getByID(this.id).subscribe(data =>{
      this.angForm.patchValue(data)
    })
  })
}

postdata(data:any){
  this.service.Add(this.angForm.value).subscribe(data  =>{
    this.route.navigate([''])
  })
}
}
