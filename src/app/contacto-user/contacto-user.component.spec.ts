import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoUserComponent } from './contacto-user.component';

describe('ContactoUserComponent', () => {
  let component: ContactoUserComponent;
  let fixture: ComponentFixture<ContactoUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
