
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class MembersService {
  member: any;
  members: any
  constructor(private http: HttpClient) { }
  getAllMember(token: any) {
    const headers = { 'Authorization': token }
    return this.http.get<any>('http://localhost:3000/member/getmember', { headers })
      .pipe(map(data => {
        if (data) {
          this.member = data;
          console.log(data);
        }
        return data;
      }));
  }


  addMember(member: any) {
    return this.http.post<any>('http://localhost:3000/user/signin', member)
      .pipe(map(data => {
        return data
      }))
  }
/*
  getMembers(){
    return this.http.get<any>('http://localhost:3000/member/get')
    .pipe(map(data => {
      if(data){
        this.members =data;
        console.log(this.members);
      }
      return this.members;
    }))
  }
*/
  deleteMember(member : any , token:any){
    const headers = { 'Authorization': token }
    return this.http.post<any>('http://localhost:3000/member/deletemember', member, {headers})
    .pipe(map(data =>{
      return data;
    }))
  }
  
}