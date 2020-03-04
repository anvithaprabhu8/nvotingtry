import { Component, OnInit } from '@angular/core';
import { CandidateRepository } from '../model/candidate.repository';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {

  constructor(private repo:CandidateRepository) { }

  ngOnInit() {
  }
  get areas():[]{
    return this.repo.getAllAreas();
  }
  // get candibyregions(area:string):[]{
  //    return this.repo.getCandidatesByRegion(area);
  // }
  changeCandi(area:string){
   console.log(area);
  }

}
