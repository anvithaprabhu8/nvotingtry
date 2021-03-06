import { Component, OnInit } from '@angular/core';
import { Stations } from '../model/station.model';
import { StationRepository } from '../model/station.repository';
import { RestDataSource } from '../model/rest.datasource';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-votebuttons',
  templateUrl: './votebuttons.component.html',
  styleUrls: ['./votebuttons.component.scss']
})
export class VotebuttonsComponent implements OnInit {
  submitted:boolean=false;
  constructor(private stationRepo: StationRepository,private station: Stations,private datasource: RestDataSource) {
    station.enabled = false;
    station.stationpassword = null;
   }


  ngOnInit() {
  }

  get stationDetails(): [] {
    console.log(this.stationRepo.viewActivatedStations());
    return this.stationRepo.viewActivatedStations();
  }

  submit(form: NgForm){   //add import
    this.submitted=true;
  }

  findStation(form: NgForm) {
    if(form.valid) {
      let backendStation: Stations = this.stationRepo.viewStationById(this.station.stationid.toLocaleUpperCase());
      if(backendStation.stationpassword != null) {
        this.station.stationpassword = backendStation.stationpassword;
      }
    }
  }

}
