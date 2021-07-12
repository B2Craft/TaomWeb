import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SwiperModule, SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module'
import { CountToModule } from 'angular-count-to';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { AngularTiltModule } from 'angular-tilt';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPayPalModule } from 'ngx-paypal';
import { Ng5SliderModule } from 'ng5-slider';

// Modern Layout
import { ModernComponent } from './modern/modern.component';
import { ModernNavComponent } from './modern/modern-nav/modern-nav.component';
import { ModernHeaderComponent } from './modern/modern-header/modern-header.component';
import { ModernServicesComponent } from './modern/modern-services/modern-services.component';
import { ModernAboutComponent } from './modern/modern-about/modern-about.component';
import { ModernFunctionComponent } from './modern/modern-function/modern-function.component';
import { ModernTeamComponent } from './modern/modern-team/modern-team.component';
import { ModernScreenshotsComponent } from './modern/modern-screenshots/modern-screenshots.component';
import { ModernTeamMemberComponent } from './modern/modern-team-member/modern-team-member.component';
import { ModernPricingComponent } from './modern/modern-pricing/modern-pricing.component';
import { ModernBrandComponent } from './modern/modern-brand/modern-brand.component';
import { ModernSubscribeComponent } from './modern/modern-subscribe/modern-subscribe.component';
import { ModernFooterComponent } from './modern/modern-footer/modern-footer.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {};

@NgModule({
  declarations: [
    ModernComponent, ModernNavComponent, ModernHeaderComponent, ModernServicesComponent, ModernAboutComponent, ModernFunctionComponent, ModernTeamComponent, ModernScreenshotsComponent, ModernTeamMemberComponent, ModernPricingComponent, ModernBrandComponent, ModernSubscribeComponent, ModernFooterComponent],

  imports: [
    CommonModule,
    LayoutsRoutingModule,
    SwiperModule,
    CarouselModule,
    NgbModule,
    GalleryModule.forRoot(),
    SharedModule,
    CountToModule,
    AngularTiltModule,
    ScrollToModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgxPayPalModule,
    Ng5SliderModule
  ],

  exports: [],

  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})

export class LayoutsModule { }
