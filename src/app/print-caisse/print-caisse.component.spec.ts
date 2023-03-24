import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintCaisseComponent } from './print-caisse.component';

describe('PrintCaisseComponent', () => {
  let component: PrintCaisseComponent;
  let fixture: ComponentFixture<PrintCaisseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintCaisseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintCaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
