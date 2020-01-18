import { Component, OnInit } from '@angular/core';
import {ActivatedRoute ,Router} from '@angular/router'
@Component({
  selector: 'app-display-information',
  templateUrl: './display-information.component.html',
  styleUrls: ['./display-information.component.scss']
})
export class DisplayInformationComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ro:Router) { }
  public dataid:number;
  ngOnInit() {
    this.dataid = parseInt(this.route.snapshot.paramMap.get('id'));
  }
  prev(){
    this.dataid--;
    this.ro.navigate(['/details',this.dataid]);
  }
  next(){
    this.dataid++;
    this.ro.navigate(['/details',this.dataid]);
  }
}
