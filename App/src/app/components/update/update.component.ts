import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MembersService } from 'src/app/services/members.service';
import { Router } from '@angular/router';
import { Member } from 'src/app/Member';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
 
  titleList: string[] = ['นาย', 'นาง', 'นางสาว'];
  majorList: string[] = ['วิศวกรรมขนส่ง', 'วิศวกรรมการผลิต', 'วิศวกรรมไฟฟ้า', 'วิศวกรรมโยธา', 'วิศวกรรมสิ่งแวดล้อม', 'วิศวกรรมโลหะการ', 'วิศวกรรมธรณี', 'วิศวกรรมอิเล็กทรอนิกส์',
    'วิศวกรรมอุตสาหการ', 'วิศวกรรมเครื่องกล', 'วิศวกรรมเกษตร', 'วิศวกรรมคอมพิวเตอร์', 'วิศวกรรมเคมี', 'วิศวกรรมเซรามิก', 'วิศวกรรมโทรคมนาคม', 'วิศวกรรมพอลิเมอร์', 'วิศวกรรมอินเตอร์',];
  
    constructor(private ms: MembersService, private r: Router) { }
    private member = Member;
  ngOnInit(): void {
    this.member = this.ms.getter();
  }

  memberForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    sid: new FormControl('', [Validators.required, Validators.pattern('B[0-9]{7}')]),
    major: new FormControl('', [Validators.required]),
    facebook: new FormControl('', [Validators.required]),
    tell: new FormControl('', [Validators.required, Validators.pattern('0[0-9]{9}')]),
    file: new FormControl('', [Validators.required]),
    img: new FormControl('', [Validators.required]),
  })
  previewLoaded: boolean = false;
  
  updatemember() {
    console.log(this.member);
    try {
      this.ms.updateMember(this.member).subscribe(
        data => {
          //this.products = data;
          this.r.navigate(['/members']);
        },
        err => {
          console.log(err);
        }
      );
    } catch (error) {
      console.log(error);
    }
    
  }

  onChangeImg(e: any) {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      var pattern = /image-*/;
      const reader = new FileReader();
      if (!file.type.match(pattern)) {
        alert('invalid format');
        this.memberForm.reset();
      } else {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.previewLoaded = true
          this.memberForm.patchValue({
            img: reader.result
          })
        }
      }
    }
  }

  get a() { return this.memberForm.controls; }

  backtomember() {
    this.r.navigate(['members']
    )
  };
}
