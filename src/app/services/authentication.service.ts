import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public userName:string;
  public isAuthenticated:boolean;

  constructor(private http: HttpClient, public configService:ConfigService) { }

  load() : Promise<any>{
    const promise = this.http.get(this.configService.authenticationLink)
    .toPromise()
    .then(data =>{
      Object.assign(this, data);
      this.isAuthenticated = true;
      return data;
    },error=>{
      if (this.configService.production){
        this.isAuthenticated = false;
      }
      else {
        let data = {userName:"mGardner"};
        Object.assign(this,data);
        return data;
      }
    });
    return promise;
  }
}
