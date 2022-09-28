import { Component, OnInit } from '@angular/core';
import { MonsterService } from '../services/monster.service';

@Component({
  selector: 'app-my-monsters',
  templateUrl: './my-monsters.page.html',
  styleUrls: ['./my-monsters.page.scss'],
})
export class MyMonstersPage implements OnInit {

  monsters: any = []

  constructor(private monsterService: MonsterService) { }

  ngOnInit() {
    this.getAllMonsters();
  }

  getAllMonsters() {
    this.monsterService.getMonsters().subscribe(response => {
      this.monsters = response;
    });
  }

}
