import { Component, OnInit, Input } from '@angular/core';
import { Developer } from '../common/developer';
import { Skill } from '../common/skill';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {


  skills: Skill[] =  [
    new Skill('Competence1','Logo1','site1'),
    new Skill('Competence2', 'logo2', 'site2')
  ];
  developer: Developer = new Developer('Farah','Seltany',27,'Femme','Biographie', this.skills)
  /*   new Developer('Sophie','Perra',24,'Femme','Biographie',
    [
      ['Competence1','Logo1','site1'],['Competence2', 'logo2', 'site2'],['Competence3', 'logo3', 'site3']
    ]), */
  
  constructor() { }

  ngOnInit() {
  }

}
