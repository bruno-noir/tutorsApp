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
// export class MentorService {
//   foo = 123;
//   constructor(private http: HttpClient) { }

//   getMentors(page = 1): Observable<ApiResult>{
//     return this.http.get<ApiResult>
//     (`${environment.baseUrl}/mentor/popular?api_key=$(environment.apiKey)&pages=${page}`
//     );
//   }

//   getMentorDetails(id: string){
//     return this.http.get<any>(
//       `${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey}`
//     );

//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class MentorService {
  mentors: any[] = [];

  private baseUrl = 'https://dev.elevate-apis.shikshalokam.org/osl-bap/dsep/';
  private authToken = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2M2Y0Yzc0ZjNlNTEyMTM1OWI0MWU5MWIiLCJpYXQiOjE2NzY5ODYxOTEsImV4cCI6MTY3NzA3MjU5MX0.chUYeg882TyZ561Y5qp_5D2bYT-WYBcGcgnmOkvLg35ENu2Nhi0E2evXoAJFdbOIGD2CJPzmdjXf0Uzg9iuiia_I3XnmeQr85oN_YErq1Tdwo5FcSA0F7TUNKbq6O9CVTPSAigI2rJtJ4LAGkpQxqfMDq8c_7llvr24xSXfbu_vax4hmWKfJLZ5bEq8S1_fCD-6ofB1A7flmwRHWs8ruWAhlOzAZXefXLe5KXF9oubZ3EEELrDjTpZMQJ5aLQP2GJM77Qgq5mNA-RRpa6lKFoXv6D5vlVVFadoEwNgRDrVU29iHfUivxx6AP8f8G0DM4UT96fdz3xw418SZ9Xw0a7w'; // Replace with your actual token

  constructor(private http: HttpClient) {}

   searchMentorsBySessionTitle(sessionTitle: string): Observable<any[]> {
    const url = `${this.baseUrl}search`;

    const headers = new HttpHeaders().set('Authorization', this.authToken);
    const body = {
      sessionTitle: sessionTitle,
      type: 'mentor'
    };

    return this.http.post<any>(url, body, { headers }).pipe(
      map((response) => {
        this.mentors = response.data.mentors;
        return this.mentors;
      }),
      catchError((error) => {
        console.error('Error fetching mentors:', error);
        throw error; // Rethrow the error to propagate it to the caller
      })
    )
  }

  getMentorDetails(mentorId: string): Observable<any> {
    const url = `${this.baseUrl}mentor/${mentorId}`; // Adjust the URL based on your API endpoint for mentor details

    const headers = new HttpHeaders().set('Authorization', this.authToken);

    return this.http.post(url, { headers });
  }

  getMentorsList(): any[] {
    return this.mentors
  }
}



