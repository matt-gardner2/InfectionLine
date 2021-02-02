import { Component, OnInit } from '@angular/core';
import {HcIcon, SelectChangeEvent} from '@healthcatalyst/cashmere';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public userName:string;
  navIcon:HcIcon =  {fontSet: 'hc-icons', fontIcon: 'hci-catalyst-logo', fontSize: 37};
  brandingVal = 'light';
  brandImg = './assets/multicareLogo.png';
  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.userName = this.authService.userName;
  }

}
