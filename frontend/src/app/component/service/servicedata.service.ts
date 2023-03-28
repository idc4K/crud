import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Data, Genre } from '../model';
import { environment as env } from 'src/environements/environement';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicedataService {

  constructor(private http: HttpClient) { }

  listMovie() {
    return this.http.get<Data>(`${env.BASE_URL}/viewAllMovies/`);
 }

 listGenre(){
   return this.http.get<Genre>(`${env.BASE_URL}/viewAllGenres`);
 }
 DelMovie(id:any){
    return this.http.delete<Data>(`${env.BASE_URL}/deleteMovies/`+id)
 }

 getByID(id:any){
   return this.http.get<Data>(`${env.BASE_URL}/getbyId/`+id)
 }
 getByIDGenre(id:any){
   return this.http.get<Data>(`${env.BASE_URL}/getgenrebyId/`+id)
 }
 Add(data:any){
   return this.http.post<Data>(`${env.BASE_URL}/createMovies/`, data)
 }
 edit(id:any){
   return this.http.put<Data>(`${env.BASE_URL}/updateMovies/`+id.id + '/', id)
 }
}