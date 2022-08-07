export const durationFormat = (currentTime: number): string => {

    const secods = Math.floor(currentTime % 60);
    const minutes = Math.floor((currentTime / 60) % 60);

    const displaySeconds = (secods < 10) ? `0${secods}` : secods;
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;
    const format = `${displayMinutes}:${displaySeconds}`;

    return format;

}

export const remainingFormat = (currentTime: number = 0, duration: number): string => {
    const timeLeft = duration - currentTime;
    
    const secods = Math.floor(timeLeft % 60);
    const minutes = Math.floor((timeLeft / 60) % 60);

    const displaySeconds = (secods < 10) ? `0${secods}` : secods;
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;
    const format = `-${displayMinutes}:${displaySeconds}`;
    
    return format;
}

export const playerStatus = (state: any): string =>{
    let status: string = 'paused';

    switch(state.type){
        case 'play':
            status = 'play';
          break;
          case 'playing':
                status = 'playing';
            break;
              case 'ended':
                    status = 'ended';
                break;
                default:
                    status = 'paused';
                  break;
      }

    return status;
}

