import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicTemplast } from './public-templast';

describe('PublicTemplast', () => {
  let component: PublicTemplast;
  let fixture: ComponentFixture<PublicTemplast>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicTemplast]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicTemplast);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
