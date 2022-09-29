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

  getAllMonsters() {
    this.monsterService.getMonsters().subscribe(response => {
      this.Monsters = response;
    });
  }

  

}
