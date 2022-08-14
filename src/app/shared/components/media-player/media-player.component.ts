import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  
  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('');
  public listObservers$: Array<Subscription> = [];
  public state: string = 'paused';
  public favorite: boolean = false;

  constructor(public _multimediaService: MultimediaService) { }

  ngOnInit(): void {
    const statusObserver$: Subscription = this._multimediaService.playerStatus$.subscribe({
      next: result => this.state = result
    });

    this.listObservers$ = [ statusObserver$ ];
  }

  handlePosition(event: MouseEvent) {
    const { clientX } = event;
    const theNative: HTMLElement = this.progressBar.nativeElement;
    const { x, width } = theNative.getBoundingClientRect();
    const clickX = clientX - x;
    const percentageFromX = (clickX * 100) / width;
    this._multimediaService.seekAudio(percentageFromX);
  }

  toggleFavorite(favorite: boolean): void{
    this.favorite = (favorite) ? false : true;
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe());
  }

}
