import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';
import { MockService } from './mock.service';

@Injectable()
export abstract class RestService {
  private baseUrl:string;

  constructor(public http:HttpClient, protected config:ConfigService, protected mock:MockService) {
    this.loadConfig();
   }

   public loadConfig(){
     this.baseUrl = this.config.baseUrl;
   }

  protected get(relativeUrl:string):Observable<any>{
    return this.http.get(this.baseUrl + relativeUrl, {withCredentials:true})
  }

  protected post(relativeUrl:string, body:any):Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.post(this.baseUrl + relativeUrl, JSON.stringify(body), {headers: header});
  }

  protected put(relativeUrl:string, body:any):Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.put(this.baseUrl + relativeUrl, JSON.stringify(body), {headers:header});
  }

  protected delete(relativeUrl:string):Observable<any>{
    return this.http.delete(this.baseUrl + relativeUrl);
  }

  protected postFormData(relativeUrl:string, body:any):Observable<any>{
    const header = new HttpHeaders().set('Content-Type', 'multipart/form-data');
    return this.http.post(this.baseUrl + relativeUrl, body, {headers: header});
  } 
  
  protected patch(relativeUrl:string, body:any):Observable<any>{
    const header = new HttpHeaders().set('Content-type','application/json');
    return this.http.patch(this.baseUrl + relativeUrl, JSON.stringify(body), {headers:header});
  }
}