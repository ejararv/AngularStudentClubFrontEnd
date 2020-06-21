import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbanComponent } from './navban.component';

describe('NavbarComponent', () => {
  let component: NavbanComponent;
  let fixture: ComponentFixture<NavbanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
