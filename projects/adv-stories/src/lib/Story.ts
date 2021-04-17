export class Story {
    url: string = '';
    //In Seconds
    duration: string = '3s';
    isActive: boolean = false;
    isSeen: boolean = false;

    constructor(url: string, duration: string) {
        this.url = url
        this.duration = duration
    }
}