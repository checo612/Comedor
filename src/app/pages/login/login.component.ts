import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '../../../../node_modules/@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  images: Array<string> = [
    'https://dcf54aygx3v5e.cloudfront.net/35c5f64e-d137-45e8-a1e4-83d0cf1e97fb/f53917c0-15b9-41aa-8efc-f62d0fc6edc8.jpg',
    'https://d3ciwvs59ifrt8.cloudfront.net/51ba3254-c423-4a50-8b7a-f487b669106d/2bf27b0f-3b7b-44b1-9e15-58564d675e8a_l.jpg',
    'https://d3ciwvs59ifrt8.cloudfront.net/51ba3254-c423-4a50-8b7a-f487b669106d/a50a0866-35c1-4d60-ad10-f5046839511a.jpg'
  ];
  public login = true;
  constructor(private config: NgbCarouselConfig) {
  }
  ngOnInit() {
  }
  confuguracionCarrusel() {
    this.config.interval = 500;
    this.config.wrap = false;
    this.config.keyboard = false;
    this.config.pauseOnHover = false;
    this.config.showNavigationArrows = false;
  }

}
