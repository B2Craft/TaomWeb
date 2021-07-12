import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modern-team',
  templateUrl: './modern-team.component.html',
  styleUrls: ['./modern-team.component.scss']
})
export class ModernTeamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  teams = [
    { img: "assets/images/app_landing2/team/1.png",
      name: "Ümit Kantarcılar",
      designation: "Art Dirrector",
      description: "Beni meditasyona başlatıp bu büyülü yolculuklara çıkardığı için Aşkım uygulaması en çok kullandığım uygulama diyebilirim."
    },
    {
      img: "assets/images/app_landing2/team/2.png",
      name: "Ayla Çelik",
      designation: "Art Dirrector",
      description: "Kendimi hiç olmadığım kadar huzurlu ve mutlu hissediyorum. Pandemi sürecinde benimle olduğu için Aşkım uygulamasına çok teşekkür ediyorum."
    },
    { 
      img: "assets/images/app_landing2/team/3.png",
      name: "Nermin Yalın",
      designation: "Art Dirrector",
      description: "Her gece Aşkım uygulaması sayesinde deliksiz bir uyku uyuyorum. Şehir hayatı yaşıyorsanız bu uygulamaya ihtiyacınız var demektir"
    }
  ]
  
  teamcarouselOptions= {
    items: 5,
    margin: 30,
    autoHeight: true,
    nav: false,
    dots:false,
    autoplay: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2,
            margin: 10
        },
        991: {
            items: 3,
            margin: 10
        }
    }
  }

}
