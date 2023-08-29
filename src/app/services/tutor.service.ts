// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http'
// import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
// export interface ApiResult{
//   page: number;
//   results: any[];
//   total_pages: number;
//   total_results:number;
// }
// @Injectable({
//   providedIn: 'root'
// })
// export class TutorService {
//   foo = 123;
//   constructor(private http: HttpClient) { }

//   getTutors(page = 1): Observable<ApiResult>{
//     return this.http.get<ApiResult>
//     (`${environment.baseUrl}/tutor/popular?api_key=$(environment.apiKey)&pages=${page}`
//     );
//   }

//   getTutorDetails(id: string){
//     return this.http.get<any>(
//       `${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey}`
//     );

//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TutorService {
  private baseUrl = 'https://dev.elevate-apis.shikshalokam.org/osl-bap';

  constructor(private http: HttpClient) {}

  searchTutorsByMentorName(name: string): Observable<any> {
    const url = `${this.baseUrl}/dsep/search`;
    const body = {
      mentorName: name,
      type: 'mentor'
    };
    return this.http.post(url, body);
  }
}

