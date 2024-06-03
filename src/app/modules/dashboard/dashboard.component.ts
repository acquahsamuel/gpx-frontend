import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  // signedin = false;
  isLoading = false;
  username = 'Samuel';
  userProfile = './assets/images/placeholder.png';

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    // this.loggedIn();
  }


  links = [
    { 
      day : "Monday",
      promptMessages : [
      "First one Software Engineer ", 
      "The world is full ",
      "Chase your passions",
      "Software Engineer leads with code",
      "Life is short, make it memorable",
      "Stars can't shine without darkness",
      "Software Engineer crafts elegant solutions",
      "Software Engineer optimizes for performance",
      "Software Engineer debugs with expertise"
      ]
    },
    { 
      day : "Tuesday",
      promptMessages : [
      "Software Engineer is grew", 
      "The world is full of magic, waiting for you to discover",
      "Chase your passions, not your problems",
      "Software Engineer leads with code",
      "Life is short, make it memorable",
      "Chase your passions",
      "Software Engineer leads with code"
      ]
    },
    { 
      day : "Weds",
      promptMessages : [
      "Software Engineer is grew", 
      "Chase your passions",
      "Software Engineer leads with code",
      "The world is full of magic, waiting for you to discover",
      "Chase your passions, not your problems",
      "Software Engineer leads with code",
      "Life is short, make it memorable"
      ]
    },
    { 
      day : "Thursday",
      promptMessages : [
      "Software Engineer is grew", 
      "The world is full of magic, waiting for you to discover",
      "Chase your passions, not your problems",
      "Software Engineer leads with code",
      "Life is short, make it memorable",
      "Stars can't shine without darkness",
      "Software Engineer crafts elegant solutions",
      "Software Engineer optimizes for performance",
      "Software Engineer debugs with expertise",
      ]
    },
    { 
      day : "Friday",
      promptMessages : [
      "Software Engineer is grew", 
      "The world is full of magic, waiting for you to discover",
      "Chase your passions, not your problems",
      "Software Engineer leads with code",
      "Life is short, make it memorable",
      "Explode"
      ]
    }
  ];

  loggedIn() {
    this.authService.getCurrentUser().subscribe((res: any) => {
      //  console.log(res?.data.username);
      this.username = res?.data.username;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
