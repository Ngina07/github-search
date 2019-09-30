import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  public username: string;
  userData: any;
  repoData: any;
  constructor(private http: Http) {
  }
  getGithubUser(username) {
    console.log(username)
    let promise = new Promise((resolve, reject) => {
      this.http.get(environment.apiUrl + 'users/' + username + '?access_token=' + environment.apiKey).toPromise().then(response => {
        this.userData = response.json()
        resolve(this.userData)
      },
        error => {
          console.log(error)
          reject(error)
        })
    })
    return promise
  }
  getGithubRepos(username) {
    console.log(username)
    let promise = new Promise((resolve, reject) => {
      this.http.get(environment.apiUrl + 'users/' + username + '/repos?access_token=' + environment.apiKey).toPromise().then(response => {
        this.repoData = response.json()
        resolve(this.repoData)
      },
        error => {
          console.log(error)
          reject(error)
        })
    })
    return promise
  }
}



