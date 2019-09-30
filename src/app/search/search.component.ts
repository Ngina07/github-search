import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../user-profile.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  username: "";
  user: any;
  repos: any;
  constructor(
    private gitHubService: UserProfileService
  ) {
  }
  ngOnInit() {
  }
  searchUser(user) {
    console.log('Searches user', user)
    this.getUserDetails(user)
  }
  getUserDetails(user) {
    this.gitHubService.getGithubUser(user).then((response) => {
      this.user = response
    })
    this.gitHubService.getGithubRepos(user).then((response) => {
      console.log('userRepo', response)
      this.repos = response
    })
  }
}
