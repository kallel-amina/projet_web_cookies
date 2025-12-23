import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Brownies } from './brownies';

describe('Brownies', () => {
  let component: Brownies;
  let fixture: ComponentFixture<Brownies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Brownies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Brownies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
