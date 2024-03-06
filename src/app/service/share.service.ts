import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Aluno } from '../model/Aluno';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private sourceAluno =  new BehaviorSubject<Aluno>(new Aluno);
  public valueAluno = this.sourceAluno.asObservable();


  constructor() { }

  changeAluno(aluno: Aluno){
    this.sourceAluno.next(aluno); 
  }
}
