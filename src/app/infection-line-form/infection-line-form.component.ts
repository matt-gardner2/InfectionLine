import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { DataService } from '../services/data.service';
import { InfectionLineDetail } from '../models/infectionLineDetail';

@Component({
  selector: 'app-infection-line-form',
  templateUrl: './infection-line-form.component.html',
  styleUrls: ['./infection-line-form.component.scss']
})
export class InfectionLineFormComponent implements OnInit {
  public model:InfectionLineDetail;
  public mrn:string;

  constructor(public authService:AuthenticationService, private data:DataService) { }

  ngOnInit(): void {
  }
  searchMrn(){
    this.data.getInfectiousDiseaseRecordByMrn(this.mrn).subscribe(x=>{
      this.model = x.records[0].data;
    });
  }

}
