import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ImgBrokenDirective } from './directives/img-broken.directive';
import { OrderListPipe } from './pipe/order-list.pipe';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CardPlayerComponent,
    HeaderUserComponent,
    MediaPlayerComponent,
    PlayListBodyComponent,
    PlayListHeaderComponent,
    SectionGenericComponent,
    SideBarComponent,
    ImgBrokenDirective,
    OrderListPipe
  ],
  imports: [ CommonModule, RouterModule ],
  exports: [
    CardPlayerComponent,
    HeaderUserComponent,
    MediaPlayerComponent,
    PlayListBodyComponent,
    PlayListHeaderComponent,
    SectionGenericComponent,
    SideBarComponent,
    ImgBrokenDirective,
    OrderListPipe
  ]
})
export class SharedModule { }
