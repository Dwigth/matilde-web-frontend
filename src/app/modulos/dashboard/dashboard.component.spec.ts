import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { User } from 'src/app/classes/user';
import { AuthService } from 'src/app/services/auth.service';
import { ADMIN_MOCK_USER } from 'src/app/shared/MOCK/user.mock';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let authService: AuthService;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [AuthService],
      imports: [HttpClientTestingModule, RouterTestingModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authService = TestBed.inject(AuthService);
    authService.UserClass = ADMIN_MOCK_USER;
  });

  it('shound set as admin', () => {
    expect(authService.UserClass.IsAdmin).toBeTrue();
  });

  it('should get injected AuthService', () => {
    expect(authService).toBeTruthy();
  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });
});
