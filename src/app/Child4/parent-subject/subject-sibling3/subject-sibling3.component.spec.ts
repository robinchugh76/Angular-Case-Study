import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectSibling3Component } from './subject-sibling3.component';

describe('SubjectSibling3Component', () => {
  let component: SubjectSibling3Component;
  let fixture: ComponentFixture<SubjectSibling3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectSibling3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectSibling3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
