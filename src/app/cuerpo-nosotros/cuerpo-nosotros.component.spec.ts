import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoNosotrosComponent } from './cuerpo-nosotros.component';

describe('CuerpoNosotrosComponent', () => {
  let component: CuerpoNosotrosComponent;
  let fixture: ComponentFixture<CuerpoNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoNosotrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuerpoNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
