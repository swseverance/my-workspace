import { TestBed } from '@angular/core/testing';
import { ApplesComponent } from './apples.component';

describe('ApplesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplesComponent],
    }).compileComponents();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ApplesComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});
