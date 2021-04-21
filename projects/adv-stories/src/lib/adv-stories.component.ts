import { Component, Input, OnInit } from '@angular/core';
import { Story } from './Story';
import { Timer } from './Timer';

@Component({
  selector: 'adv-stories',
  templateUrl: './adv-stories.component.html',
  styleUrls: ['./adv-stories.component.css']
})
export class AdvStoriesComponent implements OnInit {

  @Input() stories:any[] = []

  @Input() timer_color:string = "#fff"

  timer: Timer;
  hideStories:boolean = true;

  ngOnInit() {
    this.stories = this.stories.map(s => {
      return new Story(s.url, s.duration)
    })
    this.start()
  }

  async start(startFrom = 0) {
    this.hideStories = false
    for(startFrom; startFrom < this.stories.length; startFrom++) {
      this.stories[startFrom].isActive = true;
      await this.countTime(parseInt(this.stories[startFrom].duration.split('s')[0]) * 1000)

      this.stories[startFrom].isSeen = true;

      if(startFrom < (this.stories.length -1)) {
        this.stories[startFrom].isActive = false;
      } else {
        this.hideStories = true
      }
    }
  }

  countTime(time) {
    return new Promise((resolve, reject) => {
      this.timer = new Timer(function() {
        resolve(true)
      }, time)
    }) 
  }

  pauseTimer() {
    this.timer.isPaused = true;
    this.timer.pause();
  }

  resumeTimer() {
    this.timer.isPaused = false;
    this.timer.resume();
  }

  prevSlide() {
    var found = false;
    this.timer.clear()
    for (var s = (this.stories.length - 1); s >= 0; s--) {
      if(found) {
        this.stories[s].isSeen = false;
        this.start(s)
        break;
      } else {
        if(s > 0) {
          if (this.stories[s].isActive && s > 0) {
            this.stories[s].isActive = false;
            this.stories[s].isSeen = false;
            found = true
          }
        } else {
          this.start(s)
        }
      }
      
    }
  }

  nextSlide() {
    this.timer.clear()
    var found = false;
    for (var s = 0; s < this.stories.length; s++) {
      if(found) {
        this.start(s)
        break;
      } else {
        if (this.stories[s].isActive && s < (this.stories.length - 1)) {
          this.stories[s].isActive = false;
          this.stories[s].isSeen = true;
          found = true
        }
      }
      
    }
  }
  
  reset() {
    this.timer.clear()
    this.stories.forEach((s: Story) => {
      s.isSeen = false;
      s.isActive = false;
    })
    this.start(0)
  }

}
