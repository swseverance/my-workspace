import { TestBed } from '@angular/core/testing';
import { CarrotsComponent } from './carrots.component';

describe('CarrotsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarrotsComponent],
    }).compileComponents();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CarrotsComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});
