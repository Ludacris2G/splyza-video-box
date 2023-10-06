import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  userData: any;

  constructor(private userService: UserService) {}

  // fetch user data
  ngOnInit() {
    this.userService.getUser().subscribe((data: Object) => {
      this.userData = data;
    });
  }
}
