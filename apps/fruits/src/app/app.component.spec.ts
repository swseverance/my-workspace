import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ApplesModule } from '@my-workspace/apples';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplesModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});
