import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class DataService extends RestService {
  public getInfectiousDiseaseRecords(skip:number,top:number):Observable<any>{
    let query = `/IDEA/api/entities/${this.config.infectiousDiseaseTableId}/records?$skip=${skip}&$top=${top}&v=1`;
    if (this.config.production){
      return this.get(query);
    }
    else {
      console.log(`Running Query: ${query}`);
      return of(this.mock.infectiousDiseaseRecords);
    }
  }
  public getInfectiousDiseaseRecordByMrn(mrn:string):Observable<any>{
    let query = `/IDEA/api/entities/${this.config.infectiousDiseaseTableId}/records?$filter=MRN eq ${mrn}&v=1`;
    if (this.config.production){
      return this.get(query);
    }
    else {
      console.log(`Running Query: ${query}`);
      return of(this.mock.oneInfectiousDiseaseRecord);
    }
  }
}
