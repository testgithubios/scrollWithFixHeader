import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDateFmtComponent } from './mat-date-fmt.component';

describe('MatDateFmtComponent', () => {
  let component: MatDateFmtComponent;
  let fixture: ComponentFixture<MatDateFmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatDateFmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDateFmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
