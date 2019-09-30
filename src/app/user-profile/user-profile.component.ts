import { Component, OnInit } from '@angular/core';
import {UserProfileService } from '../user-profile.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
 
  myProfile: any;
  myRepos: any;
  totalRepos: number;
  username = 'Ngina07';
  constructor(
    private userprofileservice: UserProfileService
  )  {
    this.getMyProfile();
    this.getMyRepos();
  }
  ngOnInit() {
  }
  getMyProfile(){
      this.userprofileservice.getGithubUser(this.username).then((response)=>{
        console.log('Ngina Profile.----------------', response)
        this.myProfile = response;
      })
    }
  getMyRepos() {
      this.userprofileservice.getGithubRepos(this.username).then((response) => {
        console.log('Ngina Repo.----------------', response)
        this.myRepos = response;
      })
    }
 }