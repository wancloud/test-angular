import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDemoComponent } from './angular-demo.component';

describe('AngularDemoComponent', () => {
  let component: AngularDemoComponent;
  let fixture: ComponentFixture<AngularDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AngularDemoComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'test-angular' title`, () => {
    const fixture = TestBed.createComponent(AngularDemoComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('test-angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AngularDemoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, test-angular');
  });
});
