import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MonsterService } from '../services/monster.service';

@Component({
  selector: 'app-my-monsters-create',
  templateUrl: './my-monsters-create.page.html',
  styleUrls: ['./my-monsters-create.page.scss'],
})
export class MyMonstersCreatePage implements OnInit {

  monsterForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private monsterService: MonsterService    
  ) {
    this.monsterForm = this.formBuilder.group({
      name: [''],
      title: [''],
      weakness: ['']
    })
  }

  ngOnInit() { }

  onSubmit() {
    if (!this.monsterForm.valid) {
      return false;
    } else {
      this.monsterService.createMonster(this.monsterForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.monsterForm.reset();
            this.router.navigate(['/my-monsters-get-delete']);
          })
        });
    }
  }

}