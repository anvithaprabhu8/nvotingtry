import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { Navigate } from './navigate.guard';
import { CandidateComponent } from './login/candidate.component';
import { OtherloginComponent } from './login/otherlogin.component';
import { CandidatecvComponent } from './login/candidatecv.component';
import { EcaComponent } from './login/eca.component';
import { AppliedvotersComponent } from './login/appliedvoters.component';
import { LogindetailsComponent } from './login/logindetails.component';
import { ViewcandidateComponent } from './login/viewcandidate.component';
import { VoterupasswordComponent } from './login/voterupassword.component';
import { ViewresultComponent } from './login/viewresult.component';
import { VotenowloginComponent } from './login/votenowlogin.component';
import { VoteComponent } from './login/vote.component';
import { CandiupasswordComponent } from './login/candiupassword.component';
import { VotebuttonsComponent } from './login/votebuttons.component';
import { AppliedcandidatesComponent } from './login/appliedcandidates.component';
import { EssComponent } from './login/ess.component';
import { GenvotingpassComponent } from './login/genvotingpass.component';
import { EnablevotingComponent } from './login/enablevoting.component';

const routes: Routes = [
{path:"register",component:RegisterComponent/*canActivate:[Navigate]*/},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent,canActivate:[Navigate]},
  {path:"login2",component:OtherloginComponent},
  {path:"candidate",component:CandidateComponent/*canActivate:[Navigate]*/},
  {path:"candidate/cv",component:CandidatecvComponent},
  {path:"eca",component:EcaComponent},
  {path:"eca/appliedvoters",component:AppliedvotersComponent},
  {path:"logindetails",component:LogindetailsComponent},
  {path:"viewcandidate",component:ViewcandidateComponent},
  {path:"voterpassword",component:VoterupasswordComponent},
  {path:"viewresult",component:ViewresultComponent},
  {path:"votelogin",component:VotenowloginComponent},
  {path:"vote",component:VoteComponent},
  {path:"ess",component:EssComponent},
  {path:"ess/genvotingpass",component:GenvotingpassComponent},
  {path:"ess/enablevoting",component:EnablevotingComponent},
  {path: "eca/appliedcandidates", component:AppliedcandidatesComponent},
  {path:"candiupassword",component:CandiupasswordComponent},
  {path:"votebuttons",component:VotebuttonsComponent},
  {path:"**",redirectTo:"home"},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [Navigate]
})
export class AppRoutingModule { }
