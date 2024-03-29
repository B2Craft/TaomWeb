import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modern-pricing',
  templateUrl: './modern-pricing.component.html',
  styleUrls: ['./modern-pricing.component.scss']
})
export class ModernPricingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  pricing = [
    { 
      icon:"rocket-ship",
      package:"Ücretsiz",
      feature1:"Easy Installations",
      feature2:"Unlimited support",
      feature3:"Free Forever",
      price:"0",
      btn:"Satın Al"
    },
    {
      icon:"diamond",
      package:"Mediam",
      feature1:"Easy Installations",
      feature2:"Unlimited support",
      feature3:"Free Forever",
      price:"29",
      btn:"Satın Al"
    },
    {
      icon:"pie-chart",
      package:"Business",
      feature1:"Easy Installations",
      feature2:"Unlimited support",
      feature3:"Free Forever",
      price:"239",
      btn:"Satın Al"
    }
  ]
  
  pricingcarouselOptions= {
    items: 3,
    margin: 30,
    nav: false,
    autoplay: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    dots: false,
    responsive: {
        0: {
            items: 1,
            margin: 10
        },
        576: {
            items: 2,
            margin: 10
        },
        991: {
            items:2,
            margin: 15
        },
        992: {
            items:3,
            margin: 15
        },
        1000: {
            items: 3
        }
    }
  }
}
