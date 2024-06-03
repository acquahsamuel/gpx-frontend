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
      "Stars can't shine without darkness",
      "Software Engineer crafts elegant solutions",
      "Software Engineer optimizes for performance",
      "Software Engineer debugs with expertise"
      ]
    },
    { 
      day : "Weds",
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
      "Stars can't shine without darkness",
      "Software Engineer crafts elegant solutions",
      "Software Engineer optimizes for performance",
      "Software Engineer debugs with expertise",
      ]
    },

    { 
      day : "Monday",
      promptMessages : [
        "Kindness is always fashionable",
        "In every moment, find a reason to smile",
        "The world is full of magic, waiting for you to discover",
        "Chase your passions, not your problems",
        "Life is short, make it memorable",
        "Stars can't shine without darkness",
        "Believe you can, and you're halfway"
      ]
    },
    { 
      day : "Monday",
      promptMessages : [
        "Software Engineer automates for efficiency",
        "Software Engineer collaborates across disciplines",
        "Software Engineer communicates through code",
        "Software Engineer problem-solves with logic",
        "Last one"
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
