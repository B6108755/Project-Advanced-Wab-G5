import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Member } from '../Member';
@Injectable({
  providedIn: 'root'
})
export class MembersService {
  private member = Member;
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

  setter(member: Member) {
    this.member = Member;
  }

  getter() {
    return this.member;
  }

  deleteMember(member: any) {
    return this.http.post<any>('http://localhost:3000/member/deletemember', member)
      .pipe(map(data => {
        return data;
      }))
  }

  updateMember(member: any) {
    return this.http.post<any>('http://localhost:3000/member/updatemember', member)
      .pipe(map(data => {
        return data;
      }))
  }

}
