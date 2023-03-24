import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDecaisseComponent } from './edit-decaisse.component';

describe('EditDecaisseComponent', () => {
  let component: EditDecaisseComponent;
  let fixture: ComponentFixture<EditDecaisseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDecaisseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDecaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
