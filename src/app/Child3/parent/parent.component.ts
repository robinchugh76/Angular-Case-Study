import { Component, OnInit } from '@angular/core';

interface State {
  countdown: number;
  timelogs: { start: boolean; countdown: number; time: Date }[];
}

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  state: State = {
    countdown: 0,
    timelogs: [],
  };
  interval: any;
  constructor() {}

  ngOnInit(): void {}

  startPause(data: { start: boolean; value: number }) {
    if (this.state.countdown === 0) {
      this.state.countdown = data.value;
    }

    this.state.timelogs.push({
      start: data.start,
      countdown: this.state.countdown,
      time: new Date(),
    });
    if (data.start) {
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        if (this.state.countdown === 0) {
          clearInterval(this.interval);
        } else {
          this.state.countdown -= 1;
        }
      }, 1000);
    } else {
      clearInterval(this.interval);
    }
  }

  reset() {
    this.state = {
      countdown: 0,
      timelogs: [],
    };
    clearInterval(this.interval);
  }
}
