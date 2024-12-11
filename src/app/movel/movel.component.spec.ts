import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovelComponent } from './movel.component';

describe('MovelComponent', () => {
  let component: MovelComponent;
  let fixture: ComponentFixture<MovelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
