import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UnityComponent } from './unity.component';

describe('UnityComponent', () => {
  let component: UnityComponent;
  let fixture: ComponentFixture<UnityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnityComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
