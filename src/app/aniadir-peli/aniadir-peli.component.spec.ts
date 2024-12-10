import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AniadirPeliComponent } from './aniadir-peli.component';

describe('AniadirPeliComponent', () => {
  let component: AniadirPeliComponent;
  let fixture: ComponentFixture<AniadirPeliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AniadirPeliComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AniadirPeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
