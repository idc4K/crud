import { Component, EventEmitter, Output } from '@angular/core';
import { navbarData } from './nav-data';


interface SideNavToggle{
  screenWidth : number;
  collapsed : boolean;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  @Output() onToggleSideNav : EventEmitter<SideNavToggle> = new EventEmitter()

  collapsed = false
  screenWidth = 0;
  navData = navbarData;

  toggleCollapse(){
    this.collapsed = !this.collapsed
    this.onToggleSideNav.emit({collapsed : this.collapsed, screenWidth : this.screenWidth})
  }

  closeSidenv(){
     this.collapsed = false
  }
}
