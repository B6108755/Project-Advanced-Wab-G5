import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'angular-web-storage';
import { EventServicesService } from '../services/event/event-services.service';


@Component({
  selector: 'app-get-route',
  templateUrl: './get-route.component.html',
  styleUrls: ['./get-route.component.css']
})
export class GetRouteComponent implements OnInit {
  id!: any;
  
  constructor(private routes : ActivatedRoute , private ess : EventServicesService , public local : LocalStorageService) { 
    this.id = this.routes.snapshot.paramMap.get('id');
    console.log(this.id)

    

  }

  ngOnInit(): void {
    
  }

}
