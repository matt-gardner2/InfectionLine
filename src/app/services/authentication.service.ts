import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public userName:string;
  public isAuthenticated:boolean;
  public authenticationLink:string;
  public production:string;

  constructor(private http: HttpClient, public configService:ConfigService) { }

  load() : Promise<any>{

    return new Promise((resolve, reject)=>{
      this.http.get('./assets/config.json').subscribe((configData)=>{
        Object.assign(this, configData);
        this.http.get(this.authenticationLink).subscribe(authData=>{
          Object.assign(this, authData);
          this.isAuthenticated = true;
          resolve(authData);
        },error=>{
          console.log("error");
          if (this.production){
            this.isAuthenticated = false;
          }
          else {
            this.isAuthenticated = true;
            let authData = {userName:"mGardner"};
            Object.assign(this,authData);
            resolve(authData);
            //return authData;
          }
        })
      });
    });
  }
}
