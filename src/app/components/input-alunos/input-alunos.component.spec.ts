import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAlunosComponent } from './input-alunos.component';

describe('InputAlunosComponent', () => {
  let component: InputAlunosComponent;
  let fixture: ComponentFixture<InputAlunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputAlunosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
