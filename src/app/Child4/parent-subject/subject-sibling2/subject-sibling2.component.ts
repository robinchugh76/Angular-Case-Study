import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParentSubjectService } from '../parent-subject.service';

@Component({
  selector: 'app-subject-sibling2',
  templateUrl: './subject-sibling2.component.html',
  styleUrls: ['./subject-sibling2.component.css'],
})
export class SubjectSibling2Component implements OnInit {
  timerform!: FormGroup;
  pause: boolean = false;
  timelogs: { start: boolean; countdown: number; time: Date }[] = [];
  countdown = 0;
  interval: any;

  constructor(
    private fb: FormBuilder,
    private ParentSubjectService: ParentSubjectService
  ) {}

  ngOnInit(): void {
    this.timerform = this.fb.group({
      timer: ['',[Validators.required,Validators.min(1)]],
    });
  }

  startpausehandler() {
    if (!this.pause) {
      if (this.countdown === 0) {
        this.countdown = this.timerform.get('timer')?.value;
      }

      this.timelogs.push({
        start: !this.pause,
        time: new Date(),
        countdown: this.countdown,
      });

      this.pause = !this.pause;

      this.ParentSubjectService.senddata({
        countdown: this.countdown,
        timelogs: this.timelogs,
      });

      this.interval = setInterval(() => {
        if (this.countdown == 0) {
          clearInterval(this.interval);
        } else {
          this.countdown -= 1;
        }

        this.ParentSubjectService.senddata({
          countdown: this.countdown,
          timelogs: this.timelogs,
        });
      }, 1000);
    } else {
      clearInterval(this.interval);
      this.timelogs.push({
        start: !this.pause,
        time: new Date(),
        countdown: this.countdown,
      });

      this.pause = !this.pause;
    }
  }

  resethandler() {
    clearInterval(this.interval);
    this.countdown = 0;
    this.pause = false;
    this.timelogs = [];
    this.timerform.get('timer')?.setValue(0);
    this.ParentSubjectService.senddata({
      countdown: 0,
      timelogs: [],
    });
  }
}
