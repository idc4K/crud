import { Component, OnInit } from '@angular/core';
import { ServicedataService } from '../service/servicedata.service';
import { environment as env } from 'src/environements/environement.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  datas : any
  env = env
  constructor(private service: ServicedataService){}

  ngOnInit(): void {
      this.fetchData()
  }
  DelUser(id:any){
    this.service.DelMovie(id).subscribe(() =>{
      this.datas= this.datas.filter((u:any) => u !== id)
      this.fetchData()
    })
  }

  fetchData(){
    this.service.listMovie().subscribe(data =>{
      this.datas = data
      console.log(data)
    })
  }
}
