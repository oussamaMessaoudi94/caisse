import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEncaisseComponent } from './edit-encaisse.component';

describe('EditEncaisseComponent', () => {
  let component: EditEncaisseComponent;
  let fixture: ComponentFixture<EditEncaisseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEncaisseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEncaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
