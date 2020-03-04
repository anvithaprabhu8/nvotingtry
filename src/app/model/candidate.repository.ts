import { Candidate } from './candidate.model';
import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Users } from './users.model';

@Injectable()
export class CandidateRepository {

    private candidates: Candidate[] = [];
    private candidatedetails: Users[] = [];
    private details: [];
    private areas: [] ;
    private candibyregion:[];
    constructor(private dataSource: RestDataSource) {
        dataSource.getCandidateDetails().subscribe(data => {
            this.candidates = data;
           // console.log((JSON.stringify(data)));
            //console.log(this.candidates);
        });
        dataSource.getUserDetails().subscribe(data2 => {
            this.candidatedetails = data2;
          //  console.log(JSON.stringify(data2));
            //console.log(this.candidatedetails);
        });
        dataSource.getAllDetails().subscribe(data2 => {
            this.details = data2;
          //  console.log(JSON.stringify(data2));
            //console.log(this.candidatedetails);
        });
        //console.log(this.candidates);
        //console.log(this.candidatedetails);
        dataSource.getAllAreas().subscribe(data2 => {
            this.areas = data2;
          //  console.log(JSON.stringify(data2));
            //console.log(this.candidatedetails);
        });
        // dataSource.getCandidatesByRegion().subscribe(data2=>{
        //     this.candibyregion=data2;
        // });
    }

    viewCandidates(): Candidate[] {
        
        return this.candidates;
    }

    viewUsers(): Users[] {
      
        return this.candidatedetails;
    }

    getAllDetails() : [] {
        return this.details;
    }
    getAllAreas(): [] {
        return this.areas;
         
    }
    getCandidatesByRegion(area:string):[]{
        return this.candibyregion;
    }

}