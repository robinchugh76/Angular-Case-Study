import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectSibling4Component } from './subject-sibling4.component';

describe('SubjectSibling4Component', () => {
  let component: SubjectSibling4Component;
  let fixture: ComponentFixture<SubjectSibling4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectSibling4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectSibling4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
