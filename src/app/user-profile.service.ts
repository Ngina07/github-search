import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  public username: string;
  private apiKey: '5de9e5e59aaf5eceb6ea1b9007d0c4692b182365';

  constructor(private http: HttpClient) {
    console.log("This service is now ready");
    this.username = 'Ngina07';
  }
}
