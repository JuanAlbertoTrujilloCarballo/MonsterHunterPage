import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  gotoGetMyMonsters(){
    this.router.navigateByUrl('/my-monsters-get-delete');
  }

  gotoCreateMyMonsters(){
    this.router.navigateByUrl('/my-monsters-create');
  }

  gotoUpdateMyMonsters(){
    this.router.navigateByUrl('/my-monsters-update');
  }

}
