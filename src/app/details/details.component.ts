import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  constructor(private r:ActivatedRoute){}
  id="test";
  ngOnInit(): void {
    this.id=this.r.snapshot.params['id'];
  }

}
