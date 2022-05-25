import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectSibling2Component } from './subject-sibling2.component';

describe('SubjectSibling2Component', () => {
  let component: SubjectSibling2Component;
  let fixture: ComponentFixture<SubjectSibling2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectSibling2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectSibling2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
