import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.component.html',
  styleUrls: ['./show-event.component.css']
})
export class ShowEventComponent implements OnInit {
  item:any = [1,2,3,4,5,6];
  constructor() { }

  ngOnInit(): void {
  }

}
