// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-tutor-details',
//   templateUrl: './tutor-details.page.html',
//   styleUrls: ['./tutor-details.page.scss'],
// })
// export class TutorDetailsPage implements OnInit {
//   tutor=null;
//   constructor(private route: ActivatedRoute, private tutorService: tutorService) { }

//   ngOnInit() {
//     const id = this.route.snapshot.paramMap.get('id');
//     this.tutorService.getTutorDetails(id).subscribe((res)=>{
//       console.log(res);
//       this.tutor =res;
//     });
    
//   }

// }

// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { sampleTutor } from './sample-tutor'; // Update the path
// import { Tutor } from 'src/app/models/tutor.model';

// @Component({
//   selector: 'app-tutor-details',
//   templateUrl: './tutor-details.page.html',
//   styleUrls: ['./tutor-details.page.scss'],
// })
// export class TutorDetailsPage implements OnInit {
//   tutor: Tutor | undefined; // Initialize as undefined

//   constructor(private route: ActivatedRoute) {}

//   ngOnInit() {
//     // Get the tutor ID from the route parameters
//     this.route.params.subscribe(params => {
//       const tutorId = params['id'];
//       console.log('Tutor ID:', tutorId);
  
//       // Find the tutor with the matching ID from the sampleTutor array
//       this.tutor = sampleTutor.find(tutor => tutor.id === tutorId);
//     });
//   }
// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TutorService } from '../../services/tutor.service';

@Component({
  selector: 'app-tutor-details',
  templateUrl: './tutor-details.page.html',
  styleUrls: ['./tutor-details.page.scss']
})
export class TutorDetailsPage implements OnInit {
  tutor: any; // Initialize as an empty object

  constructor(private route: ActivatedRoute, private tutorService: TutorService) {}

  ngOnInit() {
    // Get the tutor ID from the route parameter
    const tutorId = this.route.snapshot.paramMap.get('tutorId');
    
    // Check if tutorId is not null before using it
    if (tutorId !== null) {
      // Fetch tutor details based on tutorId
      this.tutorService.getTutorDetails(tutorId).subscribe(
        (response) => {
          this.tutor = response.mentor;
        },
        (error) => {
          console.error('Error fetching tutor details:', error);
        }
      );
    }
  }
}







