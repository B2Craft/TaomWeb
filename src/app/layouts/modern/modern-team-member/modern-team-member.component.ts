import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modern-team-member',
  templateUrl: './modern-team-member.component.html',
  styleUrls: ['./modern-team-member.component.scss']
})
export class ModernTeamMemberComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  users = [
    { 
      img:"assets/images/app_landing2/team/1.png",
      name:"Aşkım Kapışmak",
      designation:"Seniour UI/Xi Designer",
    },
    { 
      img:"assets/images/app_landing2/team/2.png",
      name:"Yasİr Erdem",
      designation:"Seniour UI/Xi Designer",
    },
    { 
      img:"assets/images/app_landing2/team/3.png",
      name:"Uğur ÇOKİÇLİ",
      designation:"Seniour UI/Xi Designer",
    },
    { 
      img:"assets/images/app_landing2/team/4.png",
      name:"Yağız Yelkencİoğlu",
      designation:"Seniour UI/Xi Designer",
    }
  ]
}
