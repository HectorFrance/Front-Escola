import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../model/Aluno';


@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  // Url api
  private url:string = 'http://localhost:8080/aluno';


  constructor(private http:HttpClient) { }

  //metodo para selcionar todos os Alunos

  getAll():Observable<Aluno[]>{
    return this.http.get<Aluno[]>(this.url);
  }

  //Metodo para cadastrar Alunos
  create(obj:Aluno):Observable<Aluno>{
    return this.http.post<Aluno>(this.url, obj);
  }

  //Metodo para alterar um aluno
  update(obj:Aluno):Observable<Aluno>{
    return this.http.put<Aluno>(this.url+"/"+obj.id, obj)

  }

  //Metodo para remover um Aluno
   deleteById(id:number):Observable<void>{
    return this.http.delete<void>(this.url + "/"+id)
   }
}
