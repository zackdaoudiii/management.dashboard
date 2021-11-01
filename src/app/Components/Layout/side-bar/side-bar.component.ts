import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { SidebarService } from "./SidebarService";
import {ROUTES} from "./sidebar.config";
import * as $ from 'jquery';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
    public menuItems: any[];

  constructor( public sidebarservice: SidebarService,private router: Router) {

    router.events.subscribe( (event: Event) => {

      if (event instanceof NavigationStart) {
        // Show loading indicator
      }

      if (event instanceof NavigationEnd && $(window).width() < 1025 && ( document.readyState == 'complete' || false ) ) {

        this.toggleSidebar();
        // Hide loading indicator

      }

      if (event instanceof NavigationError) {
        // Hide loading indicator

        // Present error to user
        console.log(event.error);
      }
    });

  }


  toggleSidebar() {
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());

    if ($(".wrapper").hasClass("nav-collapsed")) {
      // unpin sidebar when hovered
      $(".wrapper").removeClass("nav-collapsed");
      $(".sidebar-wrapper").unbind( "hover");
    } else {
      $(".wrapper").addClass("nav-collapsed");
      $(".sidebar-wrapper").hover(
        function () {
          $(".wrapper").addClass("sidebar-hovered");
        },
        function () {
          $(".wrapper").removeClass("sidebar-hovered");
        }
      )

    }

  }

  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  hideSidebar() {
    this.sidebarservice.setSidebarState(true);
  }


  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    $.getScript('./assets/js/app-sidebar.js');

  }

}
