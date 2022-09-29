import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MonsterService } from '../services/monster.service';

@Component({
  selector: 'app-my-monsters-update',
  templateUrl: './my-monsters-update.page.html',
  styleUrls: ['./my-monsters-update.page.scss'],
})
export class MyMonstersUpdatePage implements OnInit {

  updateMonsterFg: FormGroup;
  id: any;

  constructor(
    private monsterService: MonsterService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.fetchMonster(this.id);
    this.updateMonsterFg = this.formBuilder.group({
      name: [''],
      title: [''],
      weakness: ['']
    })
  }

  fetchMonster(id) {
    this.monsterService.getMonster(id).subscribe((data) => {
      this.updateMonsterFg.setValue({
        name: data['name'],
        title: data['title'],
        weakness: data['weakness']
      });
    });
  }

  onSubmit() {
    if (!this.updateMonsterFg.valid) {
      return false;
    } else {
      this.monsterService.updateMonster(this.id, this.updateMonsterFg.value)
        .subscribe(() => {
          this.updateMonsterFg.reset();
          this.router.navigate(['/my-monster-get-delete']);
        })
    }
  }

}
