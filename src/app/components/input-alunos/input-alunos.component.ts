import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Aluno } from '../../model/Aluno';
import { CommonModule } from '@angular/common';
import { AlunoService } from '../../service/aluno.service';
import { RouterLink } from '@angular/router';
import { ShareService } from '../../service/share.service';

@Component({
  selector: 'app-input-alunos',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './input-alunos.component.html',
  styleUrl: './input-alunos.component.css'
})
export class InputAlunosComponent implements OnInit {

  //Objeto do tipo cliente
  aluno = new Aluno();

  //variavel para visibilidade dos botoes
  btnCadastro: boolean = true;

  //JSON de alunos
  alunos: Aluno[] = [];

  //Texto botão de envio
  submit: string = ""
  submitMethod: string= ""

  constructor(private serviceAluno: AlunoService,
    private shareService: ShareService) { }

  //Metdos Cadastrar
  createOrUpdate(): void {
    
    //Verifica se há aluno selecionado
    if (this.aluno.id > 0) {
      this.serviceAluno.update(this.aluno).subscribe(
        retorno => {

          //obter posição no vetor do aluno
          let posicao = this.alunos.findIndex(obj =>{
            return obj.id == retorno.id;
          });

          //Alterar o aluno no vetor
          this.alunos[posicao] = retorno;


        });
    } else {
      this.serviceAluno.create(this.aluno)
      .subscribe(retorno => {

        //Cadastrar no vetor
        // this.alunos.push(retorno);

        //Limpar form
        this.aluno = new Aluno();

        //menssagem
        // alert("Cliente cadastrado")
      })
    }
    
  }

  cancel(): void {

    this.aluno = new Aluno();

  }

  

  //metodo de inicialização
  ngOnInit() {
    this.shareService.valueAluno.subscribe(
      valueAluno => this.aluno = valueAluno
    )
    if (this.aluno.id > 0) {
      this.submit = "Alterar"
    } else {
      this.submit = "Cadastrar"
    }
  }
}
