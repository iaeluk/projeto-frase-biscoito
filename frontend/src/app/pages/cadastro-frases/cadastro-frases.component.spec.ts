import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroFrasesComponent } from './cadastro-frases.component';

describe('CadastroFrasesComponent', () => {
  let component: CadastroFrasesComponent;
  let fixture: ComponentFixture<CadastroFrasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroFrasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroFrasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
