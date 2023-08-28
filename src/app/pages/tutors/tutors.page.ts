import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
// import { TutorService } from 'src/app/services/tutor.service';
import { Tutor } from 'src/app/models/tutor.model';
 // Update this path

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.page.html',
  styleUrls: ['./tutors.page.scss'],
})
export class TutorsPage implements OnInit {
  // tutors = [];
  // currentPage=1;

  // constructor(private tutorService: TutorService, private loadingCtrl: LoadingController ) { }
  // ngOnInit(){
  //   this.loadTutors();
  // }

  // async loadMovies() {
  //   const loading = await this.loadingCtrl.create({
  //     message: 'Loading..',
  //     spinner: 'bubbles',
  //   });
  //   await loading.present();

  //   this.tutorService.getTutorDetails(this.currentPage).subscribe((res)=>{
  //     loading.dismiss();
  //     this.tutors.push(..res.results);
  //     console.log(res);
  //     event?.target.complete();
  //     if(event){
  //        event.target.disabled=res.total_pages === this.currentPage;
  //        }
  //   });
  // }
//   loadMore(event: InfiniteScrollCustomEvent){
//     this.currentPage++;
//     this.loadMovies(event);
//   }
// }
  tutors: Tutor[] = [];
  isLoading = true; // Initialize loading state

  constructor(private loadingController: LoadingController) {}

  async ngOnInit() {
    await this.presentLoading(); // Show loading spinner
    // Simulate fetching data from an API
    setTimeout(() => {
      this.tutors = [
        { 
          id : "6480d37d62820fd9e6bf06ef",
          name: "Nathaniel Schuster",
          aboutMentor: "A true master of their craft, this mentor has spent decades honing their skills and building their knowledge base. They are a sought-after consultant and advisor, known for their ability to tackle even the most difficult challenges with ease. Despite their impressive credentials, they are warm and approachable, always happy to help those who are eager to learn.",
          professionalExperience: "Principal Engineer | Product Development Lead - NexGen Innovations",
          qualification: "M.Tech from BITS Pilani",
          experience: "27 Years",
          totalMeetings: "109+",
          specialistIn: "DevOps",
          profileImageURL: this.getRandomImageURL(),
        },
        {
          id : "6480d37d62820fd9e6bf06df",
          name: "Jane Doe",
          aboutMentor: "Experienced software developer with a passion for coding...",
          professionalExperience: "Senior Software Engineer - TechCorp",
          qualification: "B.Sc. in Computer Science",
          experience: "10 Years",
          totalMeetings: "75+",
          specialistIn: "Front-end Development",
          profileImageURL: this.getRandomImageURL(),
        },
        {
          id : "6480d37d62820fd9e6bf06ez",
          name: "John Smith",
          aboutMentor: "Passionate data scientist with a track record of solving complex problems...",
          professionalExperience: "Data Scientist - Data Insights",
          qualification: "Ph.D. in Statistics",
          experience: "15 Years",
          totalMeetings: "90+",
          specialistIn: "Machine Learning",
          profileImageURL: this.getRandomImageURL(),
        },
        {
          id : "6480d37d62820fd9e6bf06xy",
          name: "Emily Johnson",
          aboutMentor: "Creative UX/UI designer known for transforming ideas into user-friendly designs...",
          professionalExperience: "UX/UI Designer - Creative Studios",
          qualification: "B.Des in Visual Communication",
          experience: "8 Years",
          totalMeetings: "50+",
          specialistIn: "User Experience Design",
          profileImageURL: this.getRandomImageURL(),
        },
        {
          id : "6480d37d62820fd9e6bf06vw",
          name: "Alex Martin",
          aboutMentor: "Experienced software engineer with a knack for problem-solving...",
          professionalExperience: "Software Engineer - InnovateTech",
          qualification: "M.Sc. in Computer Science",
          experience: "12 Years",
          totalMeetings: "80+",
          specialistIn: "Full-stack Development",
          profileImageURL: this.getRandomImageURL(),
        },
        {
          id : "6480d37d62820fd9e6bf06tu",
          name: "Jane Doe",
          aboutMentor: "Experienced software developer with a passion for coding...",
          professionalExperience: "Senior Software Engineer - TechCorp",
          qualification: "B.Sc. in Computer Science",
          experience: "10 Years",
          totalMeetings: "75+",
          specialistIn: "Front-end Development",
          profileImageURL: this.getRandomImageURL(),
        },
        {
          id : "6480d37d62820fd9e6bf06rs",
          name: "John Smith",
          aboutMentor: "Passionate data scientist with a track record of solving complex problems...",
          professionalExperience: "Data Scientist - Data Insights",
          qualification: "Ph.D. in Statistics",
          experience: "15 Years",
          totalMeetings: "90+",
          specialistIn: "Machine Learning",
          profileImageURL: this.getRandomImageURL(),
        },
        {
          id : "6480d37d62820fd9e6bf06pq",
          name: "Emily Johnson",
          aboutMentor: "Creative UX/UI designer known for transforming ideas into user-friendly designs...",
          professionalExperience: "UX/UI Designer - Creative Studios",
          qualification: "B.Des in Visual Communication",
          experience: "8 Years",
          totalMeetings: "50+",
          specialistIn: "User Experience Design",
          profileImageURL: this.getRandomImageURL(),
        },
        {
          id : "6480d37d62820fd9e6bf06no",
          name: "Alex Martin",
          aboutMentor: "Experienced software engineer with a knack for problem-solving...",
          professionalExperience: "Software Engineer - InnovateTech",
          qualification: "M.Sc. in Computer Science",
          experience: "12 Years",
          totalMeetings: "80+",
          specialistIn: "Full-stack Development",
          profileImageURL: this.getRandomImageURL(),
        },
        {
          id : "6480d37d62820fd9e6bf06lm",
          name: "Jane Doe",
          aboutMentor: "Experienced software developer with a passion for coding...",
          professionalExperience: "Senior Software Engineer - TechCorp",
          qualification: "B.Sc. in Computer Science",
          experience: "10 Years",
          totalMeetings: "75+",
          specialistIn: "Front-end Development",
          profileImageURL: this.getRandomImageURL(),
        },
        {
          id : "6480d37d62820fd9e6bf06jk",
          name: "John Smith",
          aboutMentor: "Passionate data scientist with a track record of solving complex problems...",
          professionalExperience: "Data Scientist - Data Insights",
          qualification: "Ph.D. in Statistics",
          experience: "15 Years",
          totalMeetings: "90+",
          specialistIn: "Machine Learning",
          profileImageURL: this.getRandomImageURL(),
        },
        {
          id : "6480d37d62820fd9e6bf06hi",
          name: "Emily Johnson",
          aboutMentor: "Creative UX/UI designer known for transforming ideas into user-friendly designs...",
          professionalExperience: "UX/UI Designer - Creative Studios",
          qualification: "B.Des in Visual Communication",
          experience: "8 Years",
          totalMeetings: "50+",
          specialistIn: "User Experience Design",
          profileImageURL: this.getRandomImageURL(),
        },
        {
          id : "6480d37d62820fd9e6bf06gh",
          name: "Alex Martin",
          aboutMentor: "Experienced software engineer with a knack for problem-solving...",
          professionalExperience: "Software Engineer - InnovateTech",
          qualification: "M.Sc. in Computer Science",
          experience: "12 Years",
          totalMeetings: "80+",
          specialistIn: "Full-stack Development",
          profileImageURL: this.getRandomImageURL(),
        },
        // Add more tutor objects
      ];
      
      this.isLoading = false; // Hide loading spinner
    }, 2000); // Simulated delay of 2 seconds
  }
  
  getRandomImageURL(): string {
    const imageId = Math.floor(Math.random() * 1000); // Generate a random image ID
    return `https://picsum.photos/200/200?image=${imageId}`;
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading tutors...',
      duration: 2000, // Optional: Set a maximum duration for the loading spinner
    });
    await loading.present();
  }

}
