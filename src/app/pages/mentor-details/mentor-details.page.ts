// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-mentor-details',
//   templateUrl: './mentor-details.page.html',
//   styleUrls: ['./mentor-details.page.scss'],
// })
// export class MentorDetailsPage implements OnInit {
//   mentor=null;
//   constructor(private route: ActivatedRoute, private mentorService: mentorService) { }

//   ngOnInit() {
//     const id = this.route.snapshot.paramMap.get('id');
//     this.mentorService.getMentorDetails(id).subscribe((res)=>{
//       console.log(res);
//       this.mentor =res;
//     });
    
//   }

// }

// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { sampleMentor } from './sample-mentor'; // Update the path
// import { Mentor } from 'src/app/models/mentor.model';

// @Component({
//   selector: 'app-mentor-details',
//   templateUrl: './mentor-details.page.html',
//   styleUrls: ['./mentor-details.page.scss'],
// })
// export class MentorDetailsPage implements OnInit {
//   mentor: Mentor | undefined; // Initialize as undefined

//   constructor(private route: ActivatedRoute) {}

//   ngOnInit() {
//     // Get the mentor ID from the route parameters
//     this.route.params.subscribe(params => {
//       const mentorId = params['id'];
//       console.log('Mentor ID:', mentorId);
  
//       // Find the mentor with the matching ID from the sampleMentor array
//       this.mentor = sampleMentor.find(mentor => mentor.id === mentorId);
//     });
//   }
// }
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MentorService } from '../../services/mentor.service';

@Component({
  selector: 'app-mentor-details',
  templateUrl: './mentor-details.page.html',
  styleUrls: ['./mentor-details.page.scss']
})
export class MentorDetailsPage implements OnInit {

  mentors: any[] = []; // Initialize as an empty object
  mentor: any

  constructor(private route: ActivatedRoute, private mentorService: MentorService) {}

  ngOnInit() {
    // Get the mentor ID from the route parameter
    const mentorId = this.route.snapshot.paramMap.get('mentorId');
    console.log(mentorId)
    
    this.mentors = this.mentorService.getMentorsList()
    // console.log(`Mentors : ${JSON.stringify(this.mentors)}`)
    let res = this.mentors.find(i => i.mentor.id === mentorId)
    this.mentor = res.mentor
  }
}







