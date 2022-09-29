import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MonsterService } from '../services/monster.service';

@Component({
  selector: 'app-my-monsters-get-delete',
  templateUrl: './my-monsters-get-delete.page.html',
  styleUrls: ['./my-monsters-get-delete.page.scss'],
})
export class MyMonstersGetDeletePage implements OnInit {

  Monsters: any = [];

  constructor(
    private monsterService: MonsterService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllMonsters();
  }

  gotoHome(){
    this.router.navigateByUrl('/home');
  }

  getAllMonsters() {
    this.monsterService.getMonsters().subscribe(response => {
      this.Monsters = response;
    });
  }

  ionViewDidEnter() {
    this.monsterService.getMonsters().subscribe((response) => {
      this.Monsters = response;
    })
  }

  removeMonster(monster, i) {
    if (window.confirm('Are you sure')) {
      this.monsterService.deleteMonster(monster.id)
      .subscribe(() => {
          this.ionViewDidEnter();
          console.log('Monster deleted!')
        }
      )
    }
  }

}
