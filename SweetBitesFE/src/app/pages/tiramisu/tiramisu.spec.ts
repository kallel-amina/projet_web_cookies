import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tiramisu } from './tiramisu';

describe('Tiramisu', () => {
  let component: Tiramisu;
  let fixture: ComponentFixture<Tiramisu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tiramisu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tiramisu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
