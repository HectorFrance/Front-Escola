import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AlunoService } from '../../service/aluno.service';
import { Aluno } from '../../model/Aluno';
import { CommonModule, NgFor } from '@angular/common';
import { ShareService } from '../../service/share.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-table-alunos',
  standalone: true,
  imports: [CommonModule, RouterLink, NgFor],
  templateUrl: './table-alunos.component.html',
  styleUrl: './table-alunos.component.css'
})
export class TableAlunosComponent implements OnInit{
  exportEvent = new EventEmitter<Aluno>

  //Objeto do tipo cliente
  aluno = new Aluno();

  //variavel para visibilidade dos botoes
  btnCadastro: boolean = true;

  //Veriavel para visibilidade da tabela 
  tabela: boolean = true;

  //JSON de alunos
  alunos: Aluno[] = [];

  //metodo de selecionar os cliente

  constructor(private serviceAluno: AlunoService,
    private shareService: ShareService) { }

  //Metodo de lsitar todos
  getAll(): void {
    this.serviceAluno.getAll()
      .subscribe(retorno => this.alunos = retorno)
  }


  //Metodo para selecionar um Aluno
  findByid(id: number): void {
    //selecionar aluno no vetor
    let obj = this.alunos.find(aluno => aluno.id === id)
    if (obj !== undefined) {
      this.aluno = obj;
      this;this.shareService.changeAluno(this.aluno)
    }
    console.log(this.aluno);

    //Visibilidade da tabela
    // this.tabela = false;

  }

  deleteById(id: number){
    this.serviceAluno.deleteById(id)
    .subscribe(retorno =>{

      //Localizando O Aluno na lista
      let posicao = this.alunos.findIndex( alunoId =>{
        return alunoId.id == id;
      })

      //Remover do vetor
      this.alunos.splice(posicao,1)

      alert("Aluno removido")
    });

  }
  
  cancel(): void{
    
    if(this.aluno.id != 0 && this.tabela === false){
      this.tabela = !this.tabela;
    }

    this.aluno = new Aluno();
    
  }

  //metodo de inicialização
  ngOnInit() {
    this.getAll();
  }

  AfterViewInit(){
    this.getAll();
  }

 
}
