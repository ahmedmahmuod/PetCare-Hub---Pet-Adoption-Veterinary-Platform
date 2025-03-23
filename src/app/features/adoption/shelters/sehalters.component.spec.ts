import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SehaltersComponent } from './sehalters.component';

describe('SehaltersComponent', () => {
  let component: SehaltersComponent;
  let fixture: ComponentFixture<SehaltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SehaltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SehaltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
