import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  goToHome(){
    this.router.navigate(['/home'], {relativeTo: this.route})
  }

  goToRegister(){
    this.router.navigate(['/register'], {relativeTo: this.route})
  }

  ngOnInit(): void {
  }

}
