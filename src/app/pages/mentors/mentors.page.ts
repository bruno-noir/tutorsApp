
import { Component } from '@angular/core';
import { MentorService } from '../../services/mentor.service';
import { LoadingController } from '@ionic/angular';
import { MD5 } from 'crypto-js';



@Component({
  selector: 'app-mentors',
  templateUrl: 'mentors.page.html',
  styleUrls: ['mentors.page.scss']
})
export class MentorsPage {
  mentors: any[] = [];
  sessionTitles: { title: string; checked: boolean }[] = [
    { title: 'ClusterNumber1', checked: false },
    { title: 'ClusterNumber2', checked: false },
    { title: 'ClusterNumber3', checked: false },
    { title: 'ClusterNumber4', checked: false },
    { title: 'ClusterNumber5', checked: false },
    { title: 'ClusterNumber6', checked: false },
    { title: 'ClusterNumber7', checked: false },
    { title: 'ClusterNumber8', checked: false },
    { title: 'ClusterNumber9', checked: false },
  ];
  private loader: HTMLIonLoadingElement | null = null;

  constructor(
    private mentorService: MentorService,
    private loadingController: LoadingController
  ) {}

  async presentLoading() {
    this.loader = await this.loadingController.create({
      message: 'Fetching mentors...',
    });
    await this.loader.present();
  }

  async dismissLoading() {
    if (this.loader) {
      await this.loader.dismiss();
      this.loader = null;
    }
  }

  onSessionTitleChange(event: any) {
    const selectedSessionTitle = event.detail.value;
    this.searchMentorsBySelectedSessionTitle(selectedSessionTitle);
  }

  async searchMentorsBySelectedSessionTitle(sessionTitle: string) {
    if (!sessionTitle) {
      this.mentors = []; // Clear mentors if no session title selected
      return;
    }

    try {
      this.presentLoading();
      const resp = await this.mentorService.searchMentorsBySessionTitle(sessionTitle).toPromise();
      if (resp) { // Check if resp is not undefined
        this.mentors = resp;
        console.log(`Mentors for ${sessionTitle}:`, resp);
      } else {
        console.log(`No mentors found for ${sessionTitle}`);
      }
    } catch (error) {
      console.log(`Error fetching mentors for ${sessionTitle}:`, error);
    } finally {
      this.dismissLoading();
    }
  }

  getRandomImageURL(): string {
    // Generate a random email address for Gravatar
    const randomEmail = `${Math.random()
      .toString(36)
      .substring(7)}@example.com`;
  
    // Calculate the MD5 hash of the random email address
    const hash = MD5(randomEmail.trim().toLowerCase());
  
    // Construct the Gravatar URL
    const gravatarUrl = `https://www.gravatar.com/avatar/${hash.toString()}?s=200&d=identicon`;
  
    return gravatarUrl;
  }
  
}