import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  isLargeScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width > 720) {
        return true;
    } else {
        return false;
    }
  }

  selectedIndex: number = null;

   setIndex(index: number) {
      this.selectedIndex = index;
   }

  items = [
    {
      routerLink: '/dashboard',
      icon: 'dashboard',
      title: 'Dashboard',
    },
    {
      routerLink: '/ledger',
      icon: 'library_books',
      title: 'Ledger'
    },
    {
      routerLink: '/announcements',
      icon: 'sms_failed',
      title: 'Announcement'
    },
    {
      routerLink: '/assets',
      icon: 'web_asset',
      title: 'Assets'
    },
    {
      routerLink: '/users',
      icon: 'person',
      title: 'User Management'
    },
    {
      routerLink: '/staff',
      icon: 'people_alt',
      title: 'Staff Management'
    },
    {
      routerLink: '/settings',
      icon: 'settings',
      title: 'Settings'
    },
    {
      routerLink: '',
      icon: 'exit_to_app',
      title: 'Logout'
    },
  ]

  notifications = [
    {
      icon: 'settings',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet dolor ac lorem lacinia, at laoreet felis ultricies. Maecenas condimentum et sapien quis congue.',
      dateTime: '10 minutes ago'
    },
    {
      icon: 'settings',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet dolor ac lorem lacinia, at laoreet felis ultricies. Maecenas condimentum et sapien quis congue.',
      dateTime: '10 minutes ago'
    },
    {
      icon: 'settings',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet dolor ac lorem lacinia, at laoreet felis ultricies. Maecenas condimentum et sapien quis congue.',
      dateTime: '10 minutes ago'
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
