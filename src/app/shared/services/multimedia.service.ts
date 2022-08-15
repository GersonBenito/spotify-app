import { EventEmitter, Injectable } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { BehaviorSubject } from 'rxjs';
import { durationFormat, playerStatus, remainingFormat } from 'src/app/helpers/helpers';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  public callback: EventEmitter<TrackModel> = new EventEmitter<TrackModel>();
  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined);
  public audio!: HTMLAudioElement;
  public timeElapsed$: BehaviorSubject<string> = new BehaviorSubject('00:00');
  public timeRemaining$: BehaviorSubject<string> = new BehaviorSubject('-00:00');
  public playerStatus$: BehaviorSubject<string> = new BehaviorSubject('paused');
  public playerPercentage$: BehaviorSubject<number> = new BehaviorSubject(0);
  public soundPercentage$: BehaviorSubject<number> = new BehaviorSubject(100);

  constructor() { 

    this.audio = new Audio();

    this.trackInfo$.subscribe({
      next: result =>{
        if(result){
          this.setAudio(result);
        }
      }
    });
    
    this.listenAllEvents();
  }

  public setAudio(track: TrackModel): void {
    this.audio.src = track.url;
    this.audio.play();
  }

  private listenAllEvents(): void {
    this.audio.addEventListener('timeupdate', this.calculateTime, false);
    this.audio.addEventListener('playing', this.setPlayerStatus, false);
    this.audio.addEventListener('play', this.setPlayerStatus, false);
    this.audio.addEventListener('pause', this.setPlayerStatus, false);
    this.audio.addEventListener('ended', this.setPlayerStatus, false);
  }

  private calculateTime = (): void =>{
    const { duration, currentTime } = this.audio;
    const formatD = durationFormat(currentTime);
    const formatR = remainingFormat(currentTime, duration || 0);
    this.setPercentage(currentTime, duration || 0);
    
    this.timeElapsed$.next(formatD);
    this.timeRemaining$.next(formatR);

  }

  private setPlayerStatus = (state: any): void =>{
    const status: string = playerStatus(state);
    this.playerStatus$.next(status);
  }

  public togglePlayer(): void{
    (this.audio.paused) ? this.audio.play() : this.audio.pause();
  }

  private setPercentage(currentTime: number, duration: number): void{
    let percentage = (currentTime * 100) / duration;
    this.playerPercentage$.next(percentage);
  }

  public seekAudio(percentage: number): void{
    const { duration } = this.audio;
    const percentageToSecond = (percentage * duration) / 100;
    this.audio.currentTime = percentageToSecond;
  }

  public seekSound(persentage: number): void {
    const sound = persentage / 100;
    this.audio.volume = sound;
    this.soundPercentage$.next(persentage);
  }
}
