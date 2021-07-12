import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-modern',
  templateUrl: './modern.component.html',
  styleUrls: ['./modern.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModernComponent implements OnInit {

  appStoreUrl = "https://apps.apple.com/tr/app/a%C5%9Fk%C4%B1m/id1533857070";
  playStoreUrl = "https://play.google.com/store/apps/details?id=com.askimapp.android";
  constructor(private route: ActivatedRoute,
    private title: Title, 
    private deviceService: DeviceDetectorService) { }

  ngOnInit() {
    this.title.setTitle(this.route.snapshot.data['title']);

    // this.deviceService.os
    this.route.queryParams.subscribe(params => {
      let abc = params["swipe"];
      // console.log(abc);
      if (abc) {
        if (this.deviceService.os === "Android") {
          window.location.href = this.playStoreUrl;
        } else if (this.deviceService.os === "iOS") {
          window.location.href = this.appStoreUrl;
        } 
      }
    });
  }

}
